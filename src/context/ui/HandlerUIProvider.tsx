import { ReactNode } from 'react';
import { HandlerUIContext } from '.';

import { ModalProvider } from '../modal';
import { AlertProvider } from '../alert';
import { ProviderSidebar } from '../sidebar';
import { ProviderCheckbox } from '../form/checkbox';

export interface Props {
  children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {

  return (
    <HandlerUIContext.Provider value={{}}>
      <ProviderSidebar>
        <ModalProvider >
          <AlertProvider>
            <ProviderCheckbox>
              {children}
            </ProviderCheckbox>
          </AlertProvider>
        </ModalProvider>
      </ProviderSidebar>
    </HandlerUIContext.Provider>
  )
}