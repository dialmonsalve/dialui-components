import { ReactNode } from 'react';
import { Content, FlexWrap } from '@/types';

interface Props {
  alignContent?: Content;
  backgroundColor?: string;
  borderRadius?: string;
  drawerWidth?: number;
  flexWrap?: FlexWrap;
  justifyContent?: Content;
  padding?: string;
  space?: number;
  children?: ReactNode;
}

export const Header = ({
  alignContent = 'flex-start',
  backgroundColor = 'white',
  borderRadius = '1rem',

  justifyContent = 'flex-end',
  padding = '2rem',

  children,
  ...props
}: Props) => {


  return (
    <header
      className='header'
      style={{
        backgroundColor, justifyContent, alignContent, padding, borderRadius
      }}      
      {...props}
    >
      {children}
    </header>
  )
}
