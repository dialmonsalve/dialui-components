import { ReactNode } from 'react';
import { HandlerUIContext } from '.';

import { ModalProvider } from '../modal';
import { AlertProvider } from '../alert';
import { ProviderSidebar } from '../sidebar';

export interface Props {
  children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {

  return (
    <HandlerUIContext.Provider value={{ }}>
      <ProviderSidebar>
        <ModalProvider >
          <AlertProvider>
            {children}
          </AlertProvider>
        </ModalProvider>
      </ProviderSidebar>
    </HandlerUIContext.Provider>
  )
}