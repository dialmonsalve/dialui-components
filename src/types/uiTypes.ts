export interface CheckboxData {
	[name: string]: boolean;
}

export interface SelectData<T> {
	[name: string]: T;
}

export type Animation = keyof typeof animation;
export type Size = keyof typeof size;
export type Radius = keyof typeof radius;

export type MessageType = 'success' | 'error' | 'warning' | 'info';

const radius = {
	'r-0': 'r-0',
	'r-1': 'r-1',
	'r-2': 'r-2',
	'r-3': 'r-3',
	'r-4': 'r-4',
	'r-5': 'r-5',
	'r-100': 'r-100',
} as const;

export const animation = {
	fadeInOut: 'fade-in-out',
	toDown: 'toDown',
	toRight: 'toRight',
	toLeft: 'toLeft',
	jumpToLeft: 'jumpToLeft',
	jumpToRight: 'jumpToRight',
	jumpToDown: 'jumpToDown',
	jumpToUp: 'jumpToUp',
	toUp: 'toUp',
} as const;

const size = {
	'sm-100': 'sm-100',
	'sm-200': 'sm-200',
	'sm-300': 'sm-300',
	'md-100': 'md-100',
	'md-200': 'md-200',
	'md-300': 'md-300',
	'lg-100': 'lg-100',
	'lg-200': 'lg-200',
	'lg-300': 'lg-300',
	'vw-25': 'vw-25',
	'vw-50': 'vw-50',
	'vw-75': 'vw-75',
	'vw-100': 'vw-100',
};

export type SpinnerType = 'fleas' | 'squares' | 'eclipse' | 'mice' | 'dots';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'vw';
