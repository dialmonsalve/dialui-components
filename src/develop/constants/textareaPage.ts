const DEFAULT_PROPS_DOM = [
	{ label: 'name= ', children: 'required;' },
	{ label: 'value= ', children: 'required;' },
	{ label: 'disabled= ', children: 'undefined;' },
	{ label: 'placeholder= ', children: 'undefined;' },
	{ label: 'totalChars= ', children: 'undefined;' },
	{ label: 'onChange= ', children: 'undefined;' },
	{ label: 'onBlur= ', children: 'undefined;' },
];

const ALL_PROPS_DOM = [
  { label: 'name: ', children: 'string;' },
	{ label: 'value: ', children: 'string' },
	{ label: 'disabled?: ', children: 'bolean' },
  { label: 'totalChars?: ', children: 'number;' },
	{ label: 'placeholder?: ', children: 'string;' },
	{
		label: 'onBlur?: ',
		children: '(event: FocusEvent<HTMLTextAreaElement>) => void;',
	},
	{
		label: 'onChange?: ',
		children: '(event: ChangeEvent<HTMLTextAreaElement>) => void;',
	},
];


export default { DEFAULT_PROPS_DOM, ALL_PROPS_DOM };
