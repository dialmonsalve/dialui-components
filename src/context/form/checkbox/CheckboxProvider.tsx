
import { ReactNode, useState, } from 'react';
import { CheckboxContext, } from '.';

export interface Props {
  children: ReactNode;
}

export const ProviderCheckbox = ({ children }: Props) => {

  const [isActiveCheckbox, setIsActiveCheckbox] = useState(false)

  const toggleCheckbox = () => {
    setIsActiveCheckbox(prev => !prev)
  }

  return (
    <CheckboxContext.Provider value={{
      isActiveCheckbox,
      toggleCheckbox
    }}>
      {children}
    </CheckboxContext.Provider>
  )
}