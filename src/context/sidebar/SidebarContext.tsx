import { createContext } from 'react';

interface ContextProps {
  //Properties
  isOpenSidebar: boolean;

  // Functions
  openSidebar: () => void
  closeSidebar: () => void

}

export const SidebarContext = createContext({} as ContextProps)