import { Colors } from "@/types"

interface Props {
  children?: string
  backgroundColor?: Colors
  size?: "sm" | "md" | 'lg'
  hasNotification: boolean
}

export const Notification = ({ children, hasNotification, backgroundColor = "red-600", size = "md" }: Props) => {

  const animation = hasNotification ? `notification-animation notification__${backgroundColor}` : 'notification__gray-200'

  return (
    <div className={`notification notification__${size} ${animation}`} >
      <p>{children}</p>
    </div>
  )
}
