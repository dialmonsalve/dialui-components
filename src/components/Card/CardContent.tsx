import { ReactNode } from 'react';

interface Props {
  color?: string
  children?: ReactNode | ReactNode[];
}

export const CardContent = ({ color='white', children }: Props) => {

  return (
    <div className='card__content'
      style={{color}}
    >
      <div className='card__content--controls' >
        {children}
      </div>
    </div>

  )
}
