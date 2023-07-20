import { MouseEvent, ReactNode } from 'react';

interface Props {
  background?: string;
  color?: string
  degrees?: number;
  finalBg?: string;
  hasGradient?: boolean;
  hover?: string
  initialBg?: string;
  margin?: string;
  middleBg?: string;
  width?: number;
  height?: number;
  children?: ReactNode | ReactNode[];
}

export const Card = ({
  background = '#000000',
  color = 'white',
  degrees = 135,
  finalBg = '#ffffff',
  hasGradient = true,
  hover = 'rgba(0,0,0,.8)',
  initialBg = ' #7a7777',
  margin,
  middleBg = ' #d4c6c6',
  children,
  ...props
}: Props) => {

  const backgroundColor = (degrees: number) => {
    if (hasGradient) {
      return background = `linear-gradient(
          ${degrees}deg,
          ${initialBg} 0%,
          ${middleBg} 50%,
          ${finalBg} 100%
        )
      `;
    }
    return background
  }

  const handleFocus = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (hasGradient) {
      e.currentTarget.style.background = backgroundColor(-degrees * .45);
    } else {
      e.currentTarget.style.background = hover;
    }
  };

  const handleBlur = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.style.background = backgroundColor(degrees);
  };

  return (
    <div
      className='card'
      style={{
        background: backgroundColor(degrees),
        color,
        margin,
      }}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      {...props}
    >
      {children}

    </div>
  )
}
