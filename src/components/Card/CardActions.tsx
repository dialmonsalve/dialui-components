import { ReactNode } from 'react';

type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface Props {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  color?: string,
  justifyContent?: Content;
  children?: ReactNode | ReactNode[]
}

export const CardActions = ({
  alignItems = 'center',
  color='white',
  justifyContent = 'space-between',
  children,
  ...props }: Props) => {

  return (
    <div
      className='card__actions'
      style={{ alignItems, justifyContent, color }}
      {...props}
    >
      {children}
    </div>
  )
}
