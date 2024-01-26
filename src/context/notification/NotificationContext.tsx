import { createContext } from 'react';

interface ContextProps {
  //Properties
  isOpenNotification:boolean;

  // Functions
  openNotification:(duration?:number)=>void;

}

export const NotificationContext = createContext({} as ContextProps)