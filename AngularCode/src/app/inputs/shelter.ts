export class Shelter{
	name: String;
	existingUnits: number;
	los: Length_Of_Stay_Data;
	enrollmentData: EnrollmentData;
	utilizationRate: number;
}

export class Length_Of_Stay_Data{
	los_17_children_number: number;
	los_17_children_exits: number;
	los_16_children_number: number;
	los_16_children_exits: number;
	los_17_adults_number: number;
	los_17_adults_exits: number;
	los_16_adults_number: number;
	los_16_adults_exits: number;
	los_17_all_number: number;
	los_16_all_number: number;
	los_17_all_exits: number;
	los_16_all_exits:number;
}

export class EnrollmentData{
	ed_16_children: number;
	ed_15_children: number;
	ed_average_children:number;
	ed_16_adults: number;
	ed_15_adults: number;
	ed_average_adults:number;
}

export const UNMETESTIMATE: number = 11;

export const SHELTERDATA:Shelter[] = [
	{	/*Shelter A = AVAC*/
		name: 'Shelter A',
		existingUnits: 3,
		los: 
		{
			los_17_children_number: 29,
			los_16_children_number: 38,
			los_17_adults_number: 0,
			los_16_adults_number: 0,
			los_17_all_number: 29,
			los_16_all_number: 38,
			los_17_children_exits: 1,
			los_16_children_exits: 1,
			los_17_adults_exits: 0,
			los_16_adults_exits: 0,
			los_17_all_exits: 1,
			los_16_all_exits: 1

		},
		enrollmentData: 
		{
			ed_16_children: 21,
			ed_15_children: 26,
			ed_average_children: 23.5,
			ed_16_adults: 0,
			ed_15_adults: 0,
			ed_average_adults: 0
		},
		utilizationRate: 67.48858447488
	},
	{	/*Shelter T = CHS Atypical Shelter*/
		name: 'Shelter T',
		existingUnits: 1,
		los: 
		{
			los_17_children_number: 136,
			los_16_children_number: 229,
			los_17_adults_number: 0,
			los_16_adults_number: 0,
			los_17_all_number: 136,
			los_16_all_number: 229,
			los_17_children_exits: 18,
			los_16_children_exits: 22,
			los_17_adults_exits: 0,
			los_16_adults_exits: 0,
			los_17_all_exits: 18,
			los_16_all_exits: 22
		},
		enrollmentData: 
		{
			ed_16_children: 1,
			ed_15_children: 1,
			ed_average_children: 1,
			ed_16_adults: 0,
			ed_15_adults: 0,
			ed_average_adults: 0
		},
		utilizationRate: 77.2602739726027
	},
	{	/*Shelter C = CHS Family Shelter*/
		name: 'Shelter C',
		existingUnits: 25,
		los: 
		{
			los_17_children_number: 135,
			los_16_children_number: 127,
			los_17_adults_number: 259,
			los_16_adults_number: 148,
			los_17_all_number: 147,
			los_16_all_number: 128,
			los_17_children_exits: 36,
			los_16_children_exits: 66,
			los_17_adults_exits: 4,
			los_16_adults_exits: 3,
			los_17_all_exits: 40,
			los_16_all_exits: 69
		},
		enrollmentData: 
		{
			ed_16_children: 59,
			ed_15_children: 102,
			ed_average_children: 80.5,
			ed_16_adults: 3,
			ed_15_adults: 5,
			ed_average_adults: 4
		},
		utilizationRate: 95.7808219178081
	},
	{	/*Shelter F = Family Promise*/
		name: 'Shelter F',
		existingUnits: 4,
		los: 
		{
			los_17_children_number: 55,
			los_16_children_number: 44,
			los_17_adults_number: 0,
			los_16_adults_number: 0,
			los_17_all_number: 55,
			los_16_all_number: 44,
			los_17_children_exits: 14,
			los_16_children_exits: 24,
			los_17_adults_exits: 0,
			los_16_adults_exits: 0,
			los_17_all_exits: 14,
			los_16_all_exits: 24
		},
		enrollmentData: 
		{
			ed_16_children: 25,
			ed_15_children: 26,
			ed_average_children: 25.5,
			ed_16_adults: 0,
			ed_15_adults: 1,
			ed_average_adults: 0.5
		},
		utilizationRate: 77.7397260273973
	},
	{	/*Shelter S = Salvation Army*/
		name: 'Shelter S',
		existingUnits: 17,
		los: 
		{
			los_17_children_number: 67,
			los_16_children_number: 81,
			los_17_adults_number: 0,
			los_16_adults_number: 0,
			los_17_all_number: 67,
			los_16_all_number: 81,
			los_17_children_exits: 30,
			los_16_children_exits: 42,
			los_17_adults_exits: 0,
			los_16_adults_exits: 1,
			los_17_all_exits: 30,
			los_16_all_exits:43 
		},
		enrollmentData: 
		{
			ed_16_children: 44,
			ed_15_children: 46,
			ed_average_children: 45,
			ed_16_adults: 0,
			ed_15_adults: 4,
			ed_average_adults:2 
		},
		utilizationRate: 60.5479452054796
	},
	{	/*Shelter W = Womanspace East*/
		name: 'Shelter W',
		existingUnits: 14,
		los: 
		{
			los_17_children_number: 56,
			los_16_children_number: 44,
			los_17_adults_number: 24,
			los_16_adults_number: 24,
			los_17_all_number: 56,
			los_16_all_number: 44,
			los_17_children_exits: 57,
			los_16_children_exits: 93,
			los_17_adults_exits: 1,
			los_16_adults_exits: 1,
			los_17_all_exits: 58,
			los_16_all_exits: 94
		},
		enrollmentData: 
		{
			ed_16_children: 105,
			ed_15_children: 115,
			ed_average_children: 110,
			ed_16_adults: 1,
			ed_15_adults: 1,
			ed_average_adults:1 
		},
		utilizationRate: 108.191780821918
	}
];