const DATA_TABLE = [
	{
		id: 1,
		name: 'Camila',
		lastName: 'Ramírez',
		country: 'Colombia',
		city: 'Bogotá',
	},
	{
		id: 3,
		name: 'Sofía',
		lastName: 'Pérez',
		country: 'España',
		city: 'Madrid',
	},
	{
		id: 4,
		name: 'Liam',
		lastName: 'Anderson',
		country: 'UK',
		city: 'London',
	},

	{
		id: 6,
		name: 'Matteo',
		lastName: 'Díaz',
		country: 'Chile',
		city: 'Santiago',
	},

	{
		id: 9,
		name: 'John',
		lastName: 'Doe',
		country: 'United State',
		city: 'Colorado',
	},
	{
		id: 10,
		name: 'Noah',
		lastName: 'Junior',
		country: 'Brasil',
		city: 'São Paulo',
	},
	{
		id: 11,
		name: 'Mia',
		lastName: 'Kahn',
		country: 'Germany',
		city: 'Berlin',
	},
	{
		id: 13,
		name: 'Elijah',
		lastName: 'Sho',
		country: 'Japan',
		city: 'Tokyo',
	},
];

const DEFAULT_PROPS_DOM = [{ label: 'backgroundColor= ', children: 'white;' }];

const ALL_PROPS_DOM = [
	{ label: 'backgroundColor?: ', children: 'BasicColors' },
];

const COLORS_DOM = [
	{ label: 'BasicColors:', children: '' },
	{ label: '', children: "| 'blue' | 'red'	| 'yellow' | 'green' | 'orange'" },
	{ label: '', children: "| 'gray' | 'white'	| 'purple' | 'pink' | 'black" },
];

export default { DATA_TABLE, DEFAULT_PROPS_DOM, ALL_PROPS_DOM, COLORS_DOM };
