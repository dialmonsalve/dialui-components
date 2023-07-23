
import { ReactNode } from 'react';
import { useHandlerAnimations } from '../../hooks';

interface Props {
  backgroundColor?: string;
  drawerWidth?: number;
  isAnimated?: boolean;
  children?: ReactNode;
}

export const Sidebar = ({
  backgroundColor = '#221c1c',
  drawerWidth = 300,
  isAnimated,
  children,
}: Props) => {

  const { onToggleSidebar, toggleSidebar } = useHandlerAnimations()

  const initial = `${isAnimated ? 'animation-sidebar' : 'sidebar'}`;
  const animation = `${isAnimated ? 'animation-hide-sidebar' : 'hide-sidebar'}`;
  
  return (
    <>
      <nav className={`show-sidebar ${initial} ${toggleSidebar ? '' : `${animation}`} `}
        style={{ backgroundColor, width: `${drawerWidth}px` }}
      >
        <ul className='sidebar__container'>
          {children}
        </ul>
        <div
          className={`menu ${toggleSidebar ? '' : 'menu-hide'}`}
          onClick={onToggleSidebar}
          style={{ left: `calc(-2rem + ${drawerWidth}px)` }}
        >
        </div>

      </nav>
    </>
  )
}
