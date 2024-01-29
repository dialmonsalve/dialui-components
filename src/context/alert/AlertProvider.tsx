import { ReactNode, useState } from 'react';

import { AlertContext } from '.';

export interface Props {
	children: ReactNode;
}

export const AlertProvider = ({ children }: Props) => {
	const [isOpenAlert, setIsOpenAlert] = useState(false);

	const openAlert = (duration = 2) => {
		setIsOpenAlert(true);

		setTimeout(() => {
			setIsOpenAlert(false);
		}, duration * 1000);
	};

	return (
		<AlertContext.Provider
			value={{
				isOpenAlert,
				openAlert,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};
