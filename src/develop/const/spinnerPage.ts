const DEFAULT_PROPS_DOM = [{ label: 'spinner= ', children: 'halfSpinner' }];

const ALL_PROPS_DOM = [
	{ label: 'spinner:? ', children: '' },
	{
		label: '',
		children: "| 'halfSpinner' | 'fleas' | 'squares'",
	},
	{ label: '', children: "| 'eclipse' | 'mice' | 'dots'| 'lp' " },
];

const OPTION_SPINNER = [
	'halfSpinner',
	'lp',
	'fleas',
	'squares',
	'eclipse',
	'mice',
	'dots',
];

export default { DEFAULT_PROPS_DOM, ALL_PROPS_DOM, OPTION_SPINNER };
