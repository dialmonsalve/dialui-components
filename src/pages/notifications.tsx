import { Notification } from "@/components/ui/Notification"
import { useNotification } from "@/hooks/context"

function NotificationPage() {

  const { openNotification } = useNotification()
  const click = () => {
    openNotification(2)
  }

  return (
    <>
      <Notification
        message="El usuario ha sido creado exitosamente"
        type="error"
        sideX="right"
        sideY="up"
        id="hola"
      />

      <button onClick={click} >click</button>
    </>
  )
}

export default NotificationPage
