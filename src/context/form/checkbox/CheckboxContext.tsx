
import { createContext } from 'react';

interface ContextProps {
  //Properties
  isActiveCheckbox: boolean;

  // Functions
  toggleCheckbox: () => void

}

export const CheckboxContext = createContext({} as ContextProps)