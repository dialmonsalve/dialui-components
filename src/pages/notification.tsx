import { Notification } from "@/components/ui/Notification";
import { Checkbox } from "@/components/ui/Checkbox";
import { useCheckbox } from "@/hooks/context/form";

function NotificationPage() {
  const notal = []

  const { isActiveCheckbox } = useCheckbox()

  const prueba = isActiveCheckbox ? "activo" : "inactivo"
  return (
    <>
      <Notification hasNotification={notal.length > 0} size="sm" backgroundColor="blue-500" >
        {notal.length === 0 ? "+99" : notal.length.toString()}
      </Notification>
      <br />
      <br />

      <Notification hasNotification backgroundColor="outline-white" size="md" >
        {notal.length === 0 ? "+99" : notal.length.toString()}

      </Notification>
      <br />

      <Notification
        hasNotification={notal.length > 0}
        backgroundColor="outline-white"
        size="lg"
      >
        {notal.length === 0 ? "+99" : notal.length.toString()}

      </Notification>
      <br />
      <Checkbox />

      <h1>{prueba}</h1>
    </>
  )
}


export default NotificationPage;