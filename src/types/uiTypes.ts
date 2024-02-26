export interface CheckboxData {
	[name: string]: boolean;
}

export interface SelectData<T> {
	[name: string]: T;
}

export type Size =
	| 'sm-100'
	| 'sm-200'
	| 'sm-300'
	| 'md-100'
	| 'md-200'
	| 'md-300'
	| 'lg-100'
	| 'lg-200'
	| 'lg-300'
	| 'vw-25'
	| 'vw-50'
	| 'vw-75'
	| 'vw-100';

export type MessageType = 'success' | 'error' | 'warning' | 'info';

export type Radius = 'r-0' | 'r-1' | 'r-2' | 'r-3' | 'r-4' | 'r-5' | 'r-100';

export type Animation =
	| 'fade-in-out'
	| 'toDown'
	| 'toRight'
	| 'toLeft'
	| 'jumpToLeft'
	| 'jumpToRight'
	| 'jumpToDown'
	| 'jumpToUp'
	| 'toUp';


export type SpinnerType = 'fleas' | 'squares' | 'eclipse' | 'mice' | 'dots';

export type IconSpinnerSize =
| 'sm'
| 'md'
| 'lg'
| 'vw'

