import { ReactNode, ButtonHTMLAttributes, } from "react";
import type { Colors, Size, Radius, SpinnerType } from "@/types";
import { IconSpinner } from "./IconSpinner";
import { RippleButton } from "./RippleButton";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: Colors
  buttonStyle?: "normal" | "squares" | "slide-down" | 'ripple' | 'beat' | 'filled' | 'bright';
  children?: string | ReactNode;
  disabled?: boolean;
  hasInitialAnimation?: boolean;
  isLoading?: boolean
  radius?: Radius;
  size?: Size;
  spinnerType?: SpinnerType
}

export const Button = ({
  backgroundColor = "blue-200",
  buttonStyle = "normal",
  children,
  disabled,
  hasInitialAnimation = false,
  isLoading = false,
  radius = 'radius-0',
  size = "md-100",
  spinnerType = "moon",
  ...props
}: ButtonProps) => {

  const isDisabled = disabled || isLoading ? "btn-disabled" : `btn__${backgroundColor} ${buttonStyle}`;
  const isAnimated = hasInitialAnimation ? "btn__animated" : "";
  const className = `btn btn__${size} btn__${radius} ${isDisabled} ${isAnimated}`

  const properties = {

    disabled: disabled || isLoading,
    className,
    ...props
  }

  if (buttonStyle !== "ripple") {
    return (
      <button
        {...properties}
      >
        {
          buttonStyle === "squares" && <>
            <span></span>
            <span></span>
          </>
        }
        {
          !isLoading ?
            children : <IconSpinner type={spinnerType} />
        }
      </button>
    );
  }
  if (buttonStyle === "ripple") {
    return (
      <RippleButton
        {...properties}
      >
        {
          !isLoading ?
            children : <IconSpinner type={spinnerType} />
        }
      </RippleButton>
    );
  }
};