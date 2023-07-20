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
  drawerWidth = 240,
  justifyContent = 'flex-end',
  padding = '2rem',
  space = 1,
  children,
  ...props
}: Props) => {

  if (space < -24) space = -24;

  const finalSpace = 100 - space;

  return (
    <header
      className='header'
      style={{
        backgroundColor, width: `calc(${finalSpace}% - ${drawerWidth}px)`, justifyContent, alignContent, padding, borderRadius
      }}      
      {...props}
    >
      {children}
    </header>
  )
}
