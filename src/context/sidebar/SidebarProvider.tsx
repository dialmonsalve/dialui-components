import { ReactNode, useReducer } from 'react';
import { SidebarContext, sidebarReducer } from '.';
import { NotificationProvider } from '../notification';

export interface Props {
  children: ReactNode;
}

export interface SidebarState {
  isOpenSidebar: boolean;
}

const SIDEBAR_INITIAL_STATE: SidebarState = {
  isOpenSidebar: false,
}

export const ProviderSidebar = ({ children }: Props) => {

  const [state, dispatch] = useReducer(sidebarReducer, SIDEBAR_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: '[Sidebar] - open sidebar' });
  }

  const closeSidebar = () => {
    dispatch({ type: '[Sidebar] - close sidebar' });
  }

  return (
    <SidebarContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar
    }}>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </SidebarContext.Provider>
  )
}