/*Code by Isaac Rudich for Demo Purposes Not A Finished Product
it is misnamed "inputs" becasue after finising the inputs I decided that instead of maintaining good style
it would be really really easy to just put the output stuff in the same file and the angular CLI does not have renaming commands as of yet
,sorry if that causes someone pain down the road but I am under the impression this is only being used to demonstrate 
the model at a conference so I was not structuring for scalability. I have instead conveniently placed all my input code above my output code with a handy dandy label where the break is. The exception to this 
is the constructor which has stuff for both but is similiarly divided. */

import { Component, OnInit } from '@angular/core';
import {Shelter, SHELTERDATA, UNMETESTIMATE} from './shelter';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {


	/*
	//
	//
	//Input Code
	//
	//
	*/

	//contains all the options for shelters
	orgs: Shelter[];

	//bound to checkboxes and radio buttons
	valueLOS: String;
	timeLOS: String;
	hhLOS:String;
	valueEnroll: String;
	timeEnroll: String;
	hhEnroll: String;
	valueUtil: String;
	valueUnits: String;
	valueUnmet: String;
	unmetEstimate: number;
	newUnits: number;


	//values used in the final calculation
	los: number;
	enteredLOS: number;
	calculatedLOS: number;
	losOrgs: String[];
	enroll: number;
	enteredEnroll: number;
	calculatedEnroll: number;
	enrollOrgs: String[];
	utilization: number;
	enteredUtil: number;
	calculatedUtil: number;
	utilOrgs: String[];
	units: number;
	enteredUnits: number;
	calculatedUnits: number;
	unitsOrgs: String[];
	unmet: number;
	enteredUnmet: number;
	calculatedUnmet: number;


	//check the radio button to see if the LOS stuff should be shown
	hideLOSCheck(): boolean{
		if(this.valueLOS == "entered"){
			return true;
		}
		else{
			return false;
		}
	}

	//check the radio button to see if the enroll stuff should be shown
	hideEnrollCheck(): boolean{
		if(this.valueEnroll == "entered"){
			return true;
		}
		else{
			return false;
		}
	}

	//check the radio button to see if the util stuff should be shown
	hideUtilCheck(): boolean{
		if(this.valueUtil == "entered"){
			return true;
		}
		else{
			return false;
		}
	}

	//check the radio button to see if the units stuff should be shown
	hideUnitsCheck(): boolean{
		if(this.valueUnits == "entered"){
			return true;
		}
		else{
			return false;
		}
	}

	//check the radio button to see if the unmet stuff should be shown
	hideUnmetCheck(): boolean{
		if(this.valueUnmet == "entered"){
			return true;
		}
		else{
			return false;
		}
	}

	//changes los to be the right value when a rbtn is clicked
	changeLOSVar(){
		if(this.valueLOS == "entered"){
			this.los = this.enteredLOS;
		}
		else{
			this.calculateLOS();
		}
	}

	//changes enroll to be the right value when a rbtn is clicked
	changeEnrollVar(){
		if(this.valueEnroll == "entered"){
			this.enroll = this.enteredEnroll;
		}
		else{
			this.calculateEnroll();
		}
	}

	//changes util to be the right value when a rbtn is clicked
	changeUtilVar(){
		if(this.valueUtil == "entered"){
			this.utilization = this.enteredUtil;
		}
		else{
			this.calculateUtilization();
		}
	}

	//changes units to be the right value when a rbtn is clicked
	changeUnitsVar(){
		if(this.valueUnits == "entered"){
			this.units = this.enteredUnits;
		}
		else{
			this.calculateUnits();
		}
	}

	//changes unmet to be the right value when a rbtn is clicked
	changeUnmetVar(){
		if(this.valueUnmet == "entered"){
			this.unmet = this.enteredUnmet;
		}
		else{
			this.calculateUnmet();
		}
	}

	//whenever a check box is clicked it recieves a name, it checks to see if the name
	//is being removed or added and then acts apropriately
	changeLosOrgs(name: String){
		var index = this.losOrgs.indexOf(name);
		if(index<0){
			this.losOrgs.push(name);
		}else if(index>0){
			this.losOrgs.splice(index,1);
		}else{
			this.losOrgs.shift();
		}
	}

	//whenever a check box is clicked it recieves a name, it checks to see if the name
	//is being removed or added and then acts apropriately
	changeEnrollOrgs(name: String){
		var index = this.enrollOrgs.indexOf(name);
		if(index<0){
			this.enrollOrgs.push(name);
		}else if(index>0){
			this.enrollOrgs.splice(index,1);
		}else{
			this.enrollOrgs.shift();
		}
	}

	//whenever a check box is clicked it recieves a name, it checks to see if the name
	//is being removed or added and then acts apropriately
	changeUtilOrgs(name: String){
		var index = this.utilOrgs.indexOf(name);
		if(index<0){
			this.utilOrgs.push(name);
		}else if(index>0){
			this.utilOrgs.splice(index,1);
		}else{
			this.utilOrgs.shift();
		}
	}

	//whenever a check box is clicked it recieves a name, it checks to see if the name
	//is being removed or added and then acts apropriately
	changeUnitsOrgs(name: String){
		var index = this.unitsOrgs.indexOf(name);
		if(index<0){
			this.unitsOrgs.push(name);
		}else if(index>0){
			this.unitsOrgs.splice(index,1);
		}else{
			this.unitsOrgs.shift();
		}
	}

	//uses current inputs to calculate the LOS
	//the math is hard to explain in a comment, 
	//but Rachel Rue asked me to code it so she could explain it
	calculateLOS(){
		if(this.valueLOS == "entered"){
			this.los = this.enteredLOS;
		}else{
			var length: number;
			var exit: number;
			var numerator: number = 0;
			var denominator: number = 0;
			//for loop plus if statement makes sure you are only including selected shelters
			for(var i = 0; i<this.orgs.length;i++){
				if(this.losOrgs.indexOf(this.orgs[i].name)>=0){
					//basically a switch to determine which variables to use
					if(this.timeLOS == "17"){
						if(this.hhLOS == "children"){
							length = this.orgs[i].los.los_17_children_number;
							exit = this.orgs[i].los.los_17_children_exits;
						}else if(this.hhLOS == "adults"){
							length = this.orgs[i].los.los_17_adults_number;
							exit = this.orgs[i].los.los_17_adults_exits;
						}else if(this.hhLOS == "all"){
							length = this.orgs[i].los.los_17_all_number;
							exit = this.orgs[i].los.los_17_all_exits;
						}
					}else if(this.timeLOS == "16"){
						if(this.hhLOS == "children"){
							length = this.orgs[i].los.los_16_children_number;
							exit = this.orgs[i].los.los_16_children_exits;
						}else if(this.hhLOS == "adults"){
							length = this.orgs[i].los.los_16_adults_number;
							exit = this.orgs[i].los.los_16_adults_exits;
						}else if(this.hhLOS == "all"){
							length = this.orgs[i].los.los_16_all_number;
							exit = this.orgs[i].los.los_16_all_exits;
						}
					}
					//once you have the numbers add them to the working fraction 
					numerator = numerator + (length*exit);
					denominator = denominator + exit;
				}
			}
			//you are done so just store it
			if(denominator == 0){
				this.calculatedLOS = 0;
				this.los = this.calculatedLOS;
			}else{
				this.calculatedLOS = Math.round(numerator/denominator);
				this.los = this.calculatedLOS;
			}
		}
	}

	//uses current inputs to calculate the enroll
	//just adds each relevant number to a sum that starts at 0
	calculateEnroll(){
		if(this.valueEnroll == "entered"){
			this.enroll = this.enteredEnroll;
		}else{
			var num: number;
			num = 0;
			//for loop plus if statement makes sure you are only including selected shelters
			for(var i = 0; i<this.orgs.length;i++){
				if(this.enrollOrgs.indexOf(this.orgs[i].name)>=0){
					//basically a switch to determine which variables to use
					if(this.timeEnroll == "15"){
						if(this.hhEnroll == "children"){
							num = num + this.orgs[i].enrollmentData.ed_15_children;
						}else if(this.hhEnroll == "adults"){
							num = num + this.orgs[i].enrollmentData.ed_15_adults;
						}
					}else if(this.timeEnroll == "16"){
						if(this.hhEnroll == "children"){
							num = num + this.orgs[i].enrollmentData.ed_16_children;
						}else if(this.hhEnroll == "adults"){
							num = num + this.orgs[i].enrollmentData.ed_16_adults;
						}
					}else if(this.timeEnroll == "average"){
						if(this.hhEnroll == "children"){
							num = num + this.orgs[i].enrollmentData.ed_average_children;
						}else if(this.hhEnroll == "adults"){
							num = num + this.orgs[i].enrollmentData.ed_average_adults;
						}
					}
				}
			}
			this.calculatedEnroll = num;
			this.enroll = this.calculatedEnroll;
		}
	}

	//uses current inputs to calculate the util
	//a simple weighted average
	calculateUtilization(){
		if(this.valueUtil == "entered"){
			this.utilization = this.enteredUtil;
		}else{
			var numerator: number = 0;
			var denominator: number = 0;
			//for loop plus if statement makes sure you are only including selected shelters
			for(var i = 0; i<this.orgs.length;i++){
				if(this.utilOrgs.indexOf(this.orgs[i].name)>=0){
					numerator = numerator + (this.orgs[i].utilizationRate*this.orgs[i].existingUnits);
					denominator = denominator + this.orgs[i].existingUnits;
				}
			}
			if(denominator == 0){
				this.calculatedUtil = 0;
			}else{
				this.calculatedUtil = Math.round(numerator/denominator);
			}
			this.utilization = this.calculatedUtil;
		}
	}

	//uses current inputs to calculate the units
	//just a sum
	calculateUnits(){
		if(this.valueUnits == "entered"){
			this.units = this.enteredUnits;
		}else{
			var num: number = 0;
			//for loop plus if statement makes sure you are only including selected shelters
			for(var i = 0; i<this.orgs.length;i++){
				if(this.unitsOrgs.indexOf(this.orgs[i].name)>=0){
					num = num + this.orgs[i].existingUnits;
				}
			}
			this.calculatedUnits = num;
			this.units = this.calculatedUnits;
		}
	}

	//uses current inputs to calculate the units
	//either uses an entered value or stored value
	calculateUnmet(){
		if(this.valueUnmet == "entered"){
			this.unmet = this.enteredUnmet*12;
		}else{
			this.calculatedUnmet = this.unmetEstimate*12;
			this.unmet = this.calculatedUnmet;
		}
	}

	isGrayLOS: boolean = false;
	isGrayUtil: boolean = false;
	isGrayUnmet: boolean = false;
	isGrayNew: boolean = false;

	//formatting rules used to gray out a box when its output is selected
	grayLOS(){
		return this.isGrayLOS;
	}

	grayUtil(){
		return this.isGrayUtil;
	}

	grayUnmet(){
		return this.isGrayUnmet;
	}

	grayNew(){
		return this.isGrayNew;
	}


	/*
	//
	//
	//Output Code
	//
	//
	*/

	output:number;
	valueOutput:String;
	outputUnitsMarker:String;

	calculateOutput(){
		if(this.valueOutput == "Average Length of Stay:"){
			this.outputUnitsMarker = " days";
			this.isGrayLOS = true;
			this.isGrayUtil= false;
			this.isGrayUnmet = false;
			this.isGrayNew = false;
			if((this.enroll+this.unmet)==0){
				this.output = 0;
			}else{
				var num: number;
				var denom: number;
				num = this.units + this. newUnits;
				num = num * this.utilization;
				num = num/100;
				num = num*365;
				denom = this.enroll + this.unmet;
				num = num/denom;
				this.output = Math.round(num);
			}
		}else if(this.valueOutput == "Utilization Rate:"){
			this.outputUnitsMarker = "%";
			this.isGrayLOS = false;
			this.isGrayUtil= true;
			this.isGrayUnmet = false;
			this.isGrayNew = false;
			if((this.units+this.newUnits) == 0){
				this.output = 0;
			}else{
				var num: number;
				var denom: number;
				num = this.enroll + this.unmet;
				num = num * this.los;
				num = num/365;
				denom = this.units + this.newUnits;
				num = num/denom;
				num = num * 100;
				this.output= Math.round(num);


				this.output = Math.round(100*(((this.enroll+this.unmet)*this.los)/365)/(this.units+this.newUnits));
			}
		}else if(this.valueOutput == "Future Annual Unmet Need:"){
			this.outputUnitsMarker = " households";
			this.isGrayLOS = false;
			this.isGrayUtil= false;
			this.isGrayUnmet = true;
			this.isGrayNew = false;
			if(this.los==0){
				this.output = 0;
			}else{
				var num: number;
				num = this.units+this.newUnits;
				num = num * this.utilization;
				num = num/100;
				num = num * 365;
				num = num/this.los;
				num = num - this.enroll;
				num = num - this.unmet;
				num = num * -1;
				this.output = Math.round(num);
			}
		}else if(this.valueOutput == "Number of New Units:"){
			this.outputUnitsMarker = "";
			this.isGrayLOS = false;
			this.isGrayUtil= false;
			this.isGrayUnmet = false;
			this.isGrayNew = true;
			if(this.utilization == 0){
				this.output = 0;
			}else{
				var num: number;
				num = this.enroll + this.unmet;
				num = num * this.los;
				num = num/365;
				num = num/this.utilization;
				num = num*100;
				num = num - this.units;
				this.output = Math.round(num);
			}
		}
	}

	constructor() {
		//input code

		//used by the HTML to generate a list of all the options
		//SHELTERDATA is an import that had all the hard coded data this demo is using
		this.orgs = SHELTERDATA;

		//starts by assuming everything org is included
		//this is pretty important, if you change that assumption you must rewrite this for loop
		this.losOrgs = [];
		this.enrollOrgs = [];
		this.utilOrgs = [];
		this.unitsOrgs =[];
		for(var i = 0; i<this.orgs.length;i++){
			this.losOrgs.push(this.orgs[i].name);
			this.enrollOrgs.push(this.orgs[i].name);
			this.utilOrgs.push(this.orgs[i].name);
			this.unitsOrgs.push(this.orgs[i].name);
		}
		//sets the default choices, these variables are bound to html rbtns
		this.valueLOS = 'entered';
		this.enteredLOS = 0; 
		this.timeLOS = '16';
		this.hhLOS = "children";
		this.valueEnroll = 'entered';
		this.enteredEnroll = 0;
		this.timeEnroll = '16';
		this.hhEnroll = 'children';
		this.valueUtil = 'entered';
		this.enteredUtil = 0;
		this.valueUnits = 'entered';
		this.enteredUnits = 0;
		this.valueUnmet = 'entered';
		this.enteredUnmet = 0;
		this.unmetEstimate = UNMETESTIMATE;
		this.newUnits = 0;

		//output code

		this.valueOutput = "Number of New Units:";
	}

	ngOnInit() {
		this.calculateLOS();
		this.calculateEnroll();
		this.calculateUtilization();
		this.calculateUnits();
		this.calculateUnmet();
		this.calculateOutput();
	}

}
