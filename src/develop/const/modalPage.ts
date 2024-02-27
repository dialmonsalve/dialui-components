
const DEFAULT_PROPS_DOM = [
	{ label: 'description: ', children: 'required' },
	{ label: 'type= ', children: 'required' },
	{ label: 'title= ', children: 'requerid' },
	{ label: 'animation= ', children: "'fade-in-out'" },
];

const ALL_PROPS_DOM = [
	{ label: 'description: ', children: 'string' },
	{ label: 'type: ', children: 'MessageType' },
	{ label: 'title: ', children: 'string' },
	{ label: 'animation?: ', children: 'Animation' },
	{
		label: 'handleModalResponse?: ',
		children: "(res: 'yes' | 'no' | 'ok' | 'cancel') => void",
	},
];

const MESSAGE_TYPE_DOM = [
	{ label: 'MessageType: ', children: '' },
	{ label: '', children: "| 'success' | 'error' | 'warning' | 'info'" },
];

const ANIMATION_DOM = [
	{ label: 'Animation: ', children: '' },
	{ label: '', children: "| 'toUp'	| 'toRight'	| 'toDown'	| 'toLeft'" },
	{
		label: '',
		children: "| 'jumpToLeft'	| 'jumpToRight'	| 'jumpToDown'	| 'jumpToUp'",
	},
	{ label: '', children: "| 'fade-in-out'" },
];

const ANIMATIONS = [
	'toUp',
	'toRight',
	'toDown',
	'toLeft',
	'jumpToLeft',
	'jumpToRight',
	'jumpToDown',
	'jumpToUp',
	'fade-in-out',
];

const MODAL_TYPE = ['success', 'error', 'warning', 'info'];
export default {
	DEFAULT_PROPS_DOM,
	ALL_PROPS_DOM,
	MESSAGE_TYPE_DOM,
	ANIMATION_DOM,
	ANIMATIONS,
  MODAL_TYPE
};
