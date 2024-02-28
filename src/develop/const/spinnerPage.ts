const DEFAULT_PROPS_DOM = [{ label: 'spinner= ', children: 'half-spinner' }];

const ALL_PROPS_DOM = [
	{ label: 'spinner:? ', children: '' },
	{
		label: '',
		children: "| 'half-spinner' | 'fleas' | 'squares'",
	},
	{ label: '', children: "| 'eclipse' | 'mice' | 'dots'| 'lp' " },
];

const OPTION_SPINNER = [
	'half-spinner',
	'fleas',
	'squares',
	'eclipse',
	'mice',
	'dots',
	'lp',
];

export default { DEFAULT_PROPS_DOM, ALL_PROPS_DOM, OPTION_SPINNER };
