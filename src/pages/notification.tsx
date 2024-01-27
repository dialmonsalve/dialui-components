import { Notification } from "@/components/ui/Notification";

function NotificationPage() {
  const notal = []

  return (
    <>
      <Notification hasNotification={notal.length > 0} size="sm" backgroundColor="blue-500" >
        {notal.length === 0 ? "+99" : notal.length.toString()}
      </Notification>
      <br />
      <br />
      <br />

      <Notification hasNotification backgroundColor="outline-white" size="md" >
        {notal.length === 0 ? "+99" : notal.length.toString()}

      </Notification>
      <br />
      <br />
      <br />
      <br />

      <Notification
        hasNotification={notal.length > 0}
        backgroundColor="outline-white"
        size="lg"
      >
        {notal.length === 0 ? "+99" : notal.length.toString()}

      </Notification>


    </>
  )
}


export default NotificationPage;