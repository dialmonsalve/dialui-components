import { ReactNode } from 'react';

interface Props {
  children?: ReactNode | ReactNode[];
  color?: string
}

export const CardMedia = ({ color = 'white', children }: Props) => {
  return (
    <div
      className='card__media'
      style={{ color }}
    >

      {children}
    </div>
  )
}
