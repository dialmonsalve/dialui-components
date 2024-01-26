import { Modal } from "@/components/ui/Modal"
import { useModal } from "@/hooks/context"

function ModalPage() {

  const { setOpenModal, } = useModal()

  const openModal = () => {
    setOpenModal()
  }

  return (
    <>
      <Modal
        animation="jumpToDown"
        type="danger"
        description="Esto es una descripción de prueba"
        title="Desea eliminar?"
      />
      <button onClick={openModal} >Open</button>
    </>
  )
}

export default ModalPage
