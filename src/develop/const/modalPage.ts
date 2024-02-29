
const DEFAULT_PROPS_DOM = [
	{ label: 'description= ', children: 'required;' },
	{ label: 'title= ', children: 'required;' },
	{ label: 'type= ', children: "'info';" },
	{ label: 'animation= ', children: "'fadeInOut';" },
];

const ALL_PROPS_DOM = [
	{ label: 'description: ', children: 'string;' },
	{ label: 'type: ', children: 'MessageType;' },
	{ label: 'title: ', children: 'string;' },
	{ label: 'animation?: ', children: 'Animation;' },
	{
		label: 'handleModalAnswer?: ',
		children: "(answer: 'yes' | 'no' | 'ok' | 'cancel') => void;",
	},
];

const MESSAGE_TYPE_DOM = [
	{ label: 'MessageType: ', children: '' },
	{ label: '', children: "| 'success' | 'error' | 'warning' | 'info';" },
];

const ANIMATION_DOM = [
	{ label: 'Animation: ', children: '' },
	{ label: '', children: "| 'toUp'	| 'toRight'	| 'toDown'	| 'toLeft';" },
	{
		label: '',
		children: "| 'jumpToLeft'	| 'jumpToRight'	| 'jumpToDown'	| 'jumpToUp';",
	},
	{ label: '', children: "| 'fadeInOut';" },
];

const ANIMATIONS  = [
	'toUp',
	'toRight',
	'toDown',
	'toLeft',
	'jumpToLeft',
	'jumpToRight',
	'jumpToDown',
	'jumpToUp',
	'fadeInOut',
];

const MODAL_TYPE= ['success', 'error', 'warning', 'info'];
export default {
	DEFAULT_PROPS_DOM,
	ALL_PROPS_DOM,
	MESSAGE_TYPE_DOM,
	ANIMATION_DOM,
	ANIMATIONS,
  MODAL_TYPE
};
