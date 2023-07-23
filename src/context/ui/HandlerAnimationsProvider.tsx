import { ReactNode, useState } from 'react';
import { HandlerAnimationsContext } from './HandlerAnimationsContext';

export interface Props {
  children: ReactNode;

}
type RadioButton= 'success' | 'danger' | 'warning' | 'info';

type Hide =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp' | 'jumpToRight' | 'jumpToDown' | ''

export const ProviderHandlerAnimations = ({ children }: Props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [handleModal, setHandleModal] = useState(false);
  const [classModal, setClassModal] = useState<Hide>("fadeout");
  const [radioButton, setRadioButton] = useState<RadioButton>("success");

  const onToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const openModal = (hide: Hide) => {
    setHandleModal(true)

    setClassModal(sideHide(hide))
  }

  function closeModal() {    
    setHandleModal(false)
  }

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioButton(e.target.value as RadioButton)
  }



  const sideHide = (hide: Hide): Hide => {

    switch (hide) {
      case 'toUp':
        return 'toUp';
      case 'toDown':
        return 'toDown';
      case 'toLeft':
        return 'toLeft';
      case 'toRight':
        return 'toRight';
      case 'jumpToUp':
        return 'jumpToUp';
      case 'jumpToLeft':
        return 'jumpToLeft';
      case 'jumpToDown':
        return 'jumpToDown';
      case 'jumpToRight':
        return 'jumpToRight';
      default:
        return 'fadeout';
    }
  }

  return (
    <HandlerAnimationsContext.Provider value={{
      toggleSidebar,
      onToggleSidebar,
      handleModal,
      classModal,

      openModal,
      closeModal,
      onRadioChange,
      radioButton
    }}>
      {children}
    </HandlerAnimationsContext.Provider>
  )
}