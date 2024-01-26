import { useContext } from "react"
import { NotificationContext } from "../../context/notification"

export const useNotification = () => {

  const context = useContext(NotificationContext)

  if(context === undefined) throw new Error("Context is not used inside the parent components")

  return context 
}
