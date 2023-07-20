import { ReactNode, useState } from 'react';
import { ContextHandlerAnimations } from './ContextHandlerAnimations';

export interface Props {
  children: ReactNode;
}

export const ProviderHandlerAnimations = ({ children }: Props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const onToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar)
  }


  return (
    <ContextHandlerAnimations.Provider value={{
      toggleSidebar,
      onToggleSidebar
    }}>
      {children}
    </ContextHandlerAnimations.Provider>
  )
}