import { ReactNode } from 'react';
// import '../../sass/components/header.scss';


type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface Props {
  alignContent?: Content;
  backgroundColor?: string;
  borderRadius?: string;
  drawerWidth?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
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
