const DEFAULT_PROPS_DOM =[
{label:"hasNotification= ", children: "required;"},
{label:"children= ", children: "required;"},
{label:"backgroundColor= ", children:"'red';"},
{label:"size= ", children:"'md';"},
]

const ALL_PROPS_DOM =[
{label:"hasNotification: ", children: "boolean;"},
{label:"children: ", children: "string;"},
{label:"backgroundColor?: ", children:"BasicColors;"},
{label:"size?: ", children:"| 'sm' | 'md' | 'lg';"},
]

const COLORS_DOM = [
	{ label: 'BasicColors:', children: '' },
	{ label: '', children: "| 'blue' | 'red'	| 'yellow' | 'green' | 'orange'" },
	{ label: '', children: "| 'gray' | 'white'	| 'purple' | 'pink' | 'black" },
];


export default{DEFAULT_PROPS_DOM, ALL_PROPS_DOM, COLORS_DOM}