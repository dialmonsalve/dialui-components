
import { createContext } from 'react';

interface ContextProps {
  //Properties
  isOpenModal: boolean;
  btnOk: "ok" | ""
  btnYesNo: | "yes" | "no" | ""

  // Functions
  setOpenModal: () => void
  setCloseModal: () => void
  setBtnOk: () => void
  setBtnYesNo: (res: | "yes" | "no") => void
}

export const ModalContext = createContext({} as ContextProps)