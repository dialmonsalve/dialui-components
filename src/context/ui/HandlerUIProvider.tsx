import { ReactNode } from 'react';
import { HandlerUIContext } from '.';

import { ModalProvider } from '../modal';
import { NotificationProvider } from '../notification';
import { ProviderSidebar } from '../sidebar';

export interface Props {
  children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {

  return (
    <HandlerUIContext.Provider value={{ }}>
      <ProviderSidebar>
        <ModalProvider >
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </ModalProvider>
      </ProviderSidebar>
    </HandlerUIContext.Provider>
  )
}