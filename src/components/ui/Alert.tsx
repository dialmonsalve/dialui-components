import { useAlert } from "@/hooks/context";
import { CSSProperties } from "react";

interface Props {
  message: string;
  type: "info" | "error" | "success" | "warning"
  sideY?: "up" | "down"
  sideX?: "left" | "right"
  duration?: number
  style?: CSSProperties;
  id?: string
}

export const Alert = ({
  message,
  type,
  style,
  sideY = "up",
  sideX = "right",
  id,
  ...props
}: Props
) => {

  const hideAlert = sideX === 'left' ? "hide-alert-left" : "hide-alert-right"

  const { isOpenAlert } = useAlert()

  const showAlert = isOpenAlert ? "show-alert" : hideAlert

  return (
    <div
      className={`alert ${type} alert__${sideY} alert__${sideX} ${showAlert}`}
      style={style}
      id={id}
      {...props}
    >
      <p className="alert__message">{message}</p>
    </div>
  )
}
