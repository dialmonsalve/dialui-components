import { ReactNode, useState } from 'react';
import { NotificationContext } from '.';

export interface Props {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {

  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const openNotification = (duration = 2) => {

    setIsOpenNotification(true)

    setTimeout(() => {
      setIsOpenNotification(false)
    }, duration * 1000);
  }

  return (
    <NotificationContext.Provider value={{
      isOpenNotification,
      openNotification,
    }}>
      {children}
    </NotificationContext.Provider>
  )
}