const DEFAULT_PROPS_DOM = [
	{ label: 'button= ', children: "'normal';" },
	{ label: 'backgroundColor = ', children: "'blue-200';" },
	{ label: 'disabled = ', children: 'false;' },
	{ label: 'hasInitialAnimation = ', children: 'false;' },
	{ label: 'isLoading = ', children: 'false' },
	{ label: 'borderRadius = ', children: "'r-0';" },
	{ label: 'size = ', children: "'sm-100';" },
	{ label: 'hasSpinner = ', children: 'false;' },
	{ label: 'iconSpinner = ', children: "'eclipse;'" },
	{ label: 'type = ', children: "'button;'" },
	{ label: 'textTransform = ', children: "'lowercase';" },
];

const ALL_PROPS_DOM = [
	{ label: 'button?: ', children: 'ButtonType;' },
	{ label: 'backgroundColor?: ', children: 'Colors;' },
	{ label: 'borderRadius?: ', children: 'Radius;' },
	{ label: 'children?: ', children: 'ReactNode;' },
	{ label: 'hasSpinner?: ', children: 'boolean;' },
	{ label: 'isLoading?: ', children: 'boolean;' },
	{ label: 'disabled?: ', children: 'boolean;' },
	{ label: 'iconSpinner?: ', children: 'SpinnerType;' },
	{ label: 'hasInitialAnimation?: ', children: 'boolean;' },
	{ label: 'size?: ', children: 'Size' },
	{ label: 'children?: ', children: 'CSSProperties;' },
	{ label: 'type?: ', children: "'submit' | 'button' | 'reset;'" },
	{
		label: 'textTransform?: ',
		children: " 'capitalize' | 'lowercase' | 'uppercase;'",
	},
	{
		label: 'onClick?: ',
		children: 'React.MouseEventHandler<HTMLButtonElement>;',
	},
];

const BACKGROUND_COLOR_DOM = [
	{ label: 'Colors?:', children: '' },
	{ label: " | 'black-...= ", children: " 100,200,300';" },
	{ label: " | 'gray-... = ", children: " 100,200,300';" },
	{ label: " | 'blue-... = ", children: "100,200,300';" },
	{ label: " | 'green-...= ", children: " 100,200,300';" },
	{ label: " | 'pink-... = ", children: "100,200,300';" },
	{ label: " | 'purple-... = ", children: " 100,200,300';" },
	{ label: " | 'red-... = ", children: "100,200,300';" },
	{ label: " | 'orange-... = ", children: " 100,200,300';" },
	{ label: " | 'yellow-... = ", children: " 100,200,300';" },
	{ label: " | 'white-100';", children: '' },
	{
		label: "| 'outline-... = ",
		children: "black, blue, gray, green, pink, purple, red, white, yellow';",
	},
];

const SIZE_DOM = [
	{ label: 'Size?: ', children: '' },
	{ label: '', children: "| 'sm-100' | 'sm-200';| 'sm-300';" },
	{ label: '', children: "| 'md-100' | 'md-200';| 'md-300';" },
	{ label: '', children: "| 'lg-100' | 'lg-200';| 'lg-300';" },
	{ label: '', children: "| 'vw-25'  | 'vw-50' | 'vw-75' | 'vw-100';" },
];

const BUTTON_DOM = [
	{ label: 'ButtonType?: ', children: '' },
	{
		label: '',
		children: "| 'normal' | 'ripple' |  'squares' | 'beat' | 'slideDown' ",
	},
];

const RADIUS_DOM = [
	{ label: 'Radius?: ', children: '' },
	{
		label: '',
		children: "|'r-0' | 'r-1' | 'r-2' | 'r-3' | 'r-4' | 'r-5' | 'r-100';",
	},
];

const ICON_SPINNER_DOM = [
	{ label: 'SpinnerType?: ', children: '' },
	{
		label: '',
		children: "|'fleas' | 'squares' | 'eclipse' | 'mice' | 'dots';",
	},
];

export default {
	DEFAULT_PROPS_DOM,
	BACKGROUND_COLOR_DOM,
	ALL_PROPS_DOM,
	SIZE_DOM,
	BUTTON_DOM,
	RADIUS_DOM,
	ICON_SPINNER_DOM,
};
