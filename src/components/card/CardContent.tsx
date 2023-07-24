import { ReactNode } from 'react';
import { FlexDirection } from '../../type';

interface Props {
  color?: string
  children?: ReactNode | ReactNode[];
  display?: string;
  flexDirection?: FlexDirection
  justifyContent?: string
}

export const CardContent = ({ color = 'white', display, flexDirection, justifyContent, children }: Props) => {

  return (
    <div className='card__content--controls'
      style={{ color, display, flexDirection, justifyContent, }}
    >
      {children}
    </div>

  )
}
