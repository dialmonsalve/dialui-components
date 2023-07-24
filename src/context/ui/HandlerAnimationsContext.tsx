import { createContext } from 'react';
import { ClassModal, ModalMessageType } from '../../type';


interface ContextProps {
  //Properties
  toggleSidebar: boolean;
  handleModal: boolean;
  classModal: ClassModal
  modalMessageType: ModalMessageType;

  // Functions
  onToggleSidebar: () => void
  openModal: (showModalClass: ClassModal) => void
  closeModal: () => void
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export const HandlerAnimationContext = createContext({} as ContextProps)