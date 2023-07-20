import { createContext } from 'react';


interface ContextProps {
  toggleSidebar: boolean;
  onToggleSidebar:()=> void
}

export const ContextHandlerAnimations = createContext({} as ContextProps)