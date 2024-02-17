import React, { ReactNode, useState } from 'react';
import { SidebarContext } from './SidebarContext';

export interface Props {
	children: ReactNode;
}

export const SidebarProvider = React.memo(({ children }: Props) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const openSidebar = () => {
		setIsOpenSidebar(true);
	};

	const closeSidebar = () => {
		setIsOpenSidebar(false);
	};

	return (
		<SidebarContext.Provider
			value={{
				isOpenSidebar,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
});
