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
	| 'w-10'
	| 'w-25'
	| 'w-50'
	| 'w-75'
	| 'w-100';

export type MessageType = 'success' | 'error' | 'warning' | 'info';

export type Radius =
	| 'radius-0'
	| 'radius-1'
	| 'radius-2'
	| 'radius-3'
	| 'radius-4'
	| 'radius-5';

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

export type ButtonStyle =
	| 'normal'
	| 'squares'
	| 'slide-down'
	| 'ripple'
	| 'beat'
	| 'filled'
	| 'bright'
	| 'table';

export type SpinnerType = 'fleas' | 'squares' | 'eclipse' | 'mice' | 'circles';
