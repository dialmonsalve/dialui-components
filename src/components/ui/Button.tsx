import { ClassModal, Color, Size } from "../../type";

export interface ButtonProps {
  backgroundColor?: Color;
  hasBackground?: boolean;
  isAnimated?: boolean;
  label: string;
  margin?: string
  onShowModal?:ClassModal 
  size?: Size;
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
