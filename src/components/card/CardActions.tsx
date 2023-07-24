import { ReactNode } from 'react';
import { AlignItems, Content } from '../../type';

interface Props {
  alignItems?: AlignItems;
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
