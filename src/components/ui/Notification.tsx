import { useNotification } from "@/hooks/context";
import { CSSProperties } from "react";

interface Props {
  message: string;
  type: "info" | "error" | "success" | "warning"
  sideY?: "up" | "down"
  sideX?: "left" | "right"
  duration?: number
  style?: CSSProperties;
  id?:string
}

export const Notification = ({
  message,
  type,
  style,
  sideY = "up",
  sideX = "right",
  id,
  ...props
}: Props
) => {

  const hideNotification = sideX === 'left' ? "hide-notification-left" : "hide-notification-right"

  const { isOpenNotification } = useNotification()

  const showNotification = isOpenNotification ? "show-notification" : hideNotification

  return (
    <div
      className={`notification ${type} notification__${sideY} notification__${sideX} ${showNotification}`}
      style={style}
      id={id}
      {...props}
    >
      <p className="notification__message">{message}</p>
    </div>
  )
}
