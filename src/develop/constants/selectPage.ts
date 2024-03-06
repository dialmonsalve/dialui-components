const SELECT_DEFAULT_PROPS_DOM = [
	{ label: 'options= ', children: 'requerid;' },
	{ label: 'multiple= ', children: 'false;' },
	{ label: 'selectState= ', children: 'requerid;' },
	{ label: 'onChange= ', children: 'requerid;' },
	{ label: 'zIndex= ', children: 'undefined;' },
];

const SELECT_ALL_PROPS_DOM = [
	{ label: 'options: ', children: 'string[];' },
	{ label: 'multiple: ', children: 'boolean;' },
	{ label: 'selectState: ', children: 'string;' },
	{ label: 'onChange: ', children: '(value: string) => void;' },
	{ label: 'zIndex?: ', children: 'number;' },
];

const MULTI_SELECT_DEFAULT_PROPS_DOM = [
	{ label: 'options= ', children: 'requerid;' },
	{ label: 'multiple= ', children: 'true;' },
	{ label: 'selectState= ', children: 'requerid;' },
	{ label: 'onChange= ', children: 'requerid;' },
	{ label: 'zIndex= ', children: 'undefined;' },
];

const MULTI_SELECT_ALL_PROPS_DOM = [
	{ label: 'options: ', children: 'string[];' },
	{ label: 'multiple: ', children: 'boolean;' },
	{ label: 'selectState: ', children: 'string[];' },
	{ label: 'onChange: ', children: '(value: string[]) => void;' },
	{ label: 'zIndex?: ', children: 'number;' },
];

export default {
	SELECT_DEFAULT_PROPS_DOM,
	SELECT_ALL_PROPS_DOM,
	MULTI_SELECT_DEFAULT_PROPS_DOM,
	MULTI_SELECT_ALL_PROPS_DOM,
};
