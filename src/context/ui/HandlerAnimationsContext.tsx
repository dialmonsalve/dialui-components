import { createContext } from 'react';

type Hide =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp' | 'jumpToRight' | 'jumpToDown' | ''

interface ContextProps {
  toggleSidebar: boolean;
  onToggleSidebar: () => void

  handleModal: boolean;
  openModal: (hide: Hide) => void
  closeModal: () => void
  classModal: Hide

  onRadioChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
  radioButton: 'success' | 'danger' | 'warning' | 'info';

}

export const HandlerAnimationsContext = createContext({} as ContextProps)