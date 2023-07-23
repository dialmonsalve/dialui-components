
type Hide =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp' | 'jumpToRight' | 'jumpToDown'

export interface ButtonProps {
  backgroundColor?: 'blue' | 'red' | 'green';
  hasBackground?: boolean;
  isAnimated?: boolean;
  label: string;
  margin?: string
  onShowModal?:Hide 
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  width?: number;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor = 'blue',
  hasBackground = true,
  isAnimated = false,
  label,
  margin = '0px',
  size = 'medium',
  type = 'button',
  width,
  ...props
}: ButtonProps) => {
  
  const bg = `btn--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`;
  const animated = isAnimated ? 'btn--animated' : '';


  return (

    <button
      type={type}
      className={`btn ${bg} btn--${size} ${animated}`}
      style={{ margin, width: `${width!}%` }}
      {...props}
    >
      {label}
    </button>

  )
}
