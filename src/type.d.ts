export interface CheckboxData {
  [name: string]: boolean;
}

export interface SelectData<T> {
  [name: string]: T;
}

export type Color = 'blue' | 'green' | 'red';

export type Size = 'small' | 'medium' | 'large';
