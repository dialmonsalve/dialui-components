export interface CheckboxData {
  [name: string]: boolean;
}

export interface SelectData<T> {
  [name: string]: T;
}

export type Color = 'blue' | 'green' | 'red';
export type Size = 'small' | 'medium' | 'large';
export type ModalMessageType = 'success' | 'danger' | 'warning' | 'info';


export type ClassModal =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp' | 'jumpToRight' | 'jumpToDown' | ''


export type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

export type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'
export type TextAlign = 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
