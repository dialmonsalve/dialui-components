export interface CheckboxData {
  [name: string]: boolean;
}

export interface SelectData<T> {
  [name: string]: T;
}

export type Size =
  | 'sm-100' | 'sm-200' | 'sm-300'
  | 'md-100' | 'md-200' | 'md-300'
  | 'lg-100' | 'lg-200' | 'lg-300'
  | 'wf-25' | 'wf-50' | 'wf-75' | 'wf-100'


export type ModalMessageType = 'success' | 'danger' | 'warning' | 'info';

export type Radius = 'radius-0' | 'radius-1' | 'radius-2' | 'radius-3' | 'radius-4' | 'radius-5'

export type Animation =
  | 'fade-in-out' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToRight' | 'jumpToDown' | 'jumpToUp' | 'toUp'


export type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

export type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

export type TextAlign = 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';

export type Position = "static" | "relative" | "absolute" | "sticky" | "fixed"; 

export type SpinnerType = 'fleas' | 'squares' | 'eclipse' | 'mouses' | 'circles'
