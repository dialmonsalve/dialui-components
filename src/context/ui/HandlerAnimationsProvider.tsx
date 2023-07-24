import { ReactNode, useReducer } from 'react';
import { HandlerAnimationContext, handlerAnimationReducer } from './';
import { ClassModal, ModalMessageType } from '../../type';

export interface Props {
  children: ReactNode;

}

export interface HandlerAnimationState {
  toggleSidebar: boolean;
  handleModal: boolean
  modalMessageType: ModalMessageType
  classModal: ClassModal
}

const HANDLER_ANIMATIONS_INITIAL_STATE: HandlerAnimationState = {
  toggleSidebar: false,
  handleModal: false,
  modalMessageType: "success",
  classModal: "fadeout"
}

export const ProviderHandlerAnimations = ({ children }: Props) => {

  const [state, dispatch] = useReducer(handlerAnimationReducer, HANDLER_ANIMATIONS_INITIAL_STATE);

  const { toggleSidebar, handleModal, modalMessageType, classModal } = state


  const onToggleSidebar = () => {
    dispatch({ type: '[HandlerAnimations] - Toggle sidebar', payload: !toggleSidebar });
  }

  const openModal = (showModalClass: ClassModal) => {
    dispatch({ type: '[HandlerAnimations] - Open modal', payload: showModalClass });
  }

  function closeModal() {
    dispatch({ type: '[HandlerAnimations] - Close modal' });
  }

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: '[HandlerAnimations] - Type message modal', payload: e.target.value as ModalMessageType })
  };

  return (
    <HandlerAnimationContext.Provider value={{
      ...state,
      toggleSidebar,
      onToggleSidebar,
      handleModal,
      classModal,

      openModal,
      closeModal,
      onRadioChange,
      modalMessageType
    }}>
      {children}
    </HandlerAnimationContext.Provider>
  )
}