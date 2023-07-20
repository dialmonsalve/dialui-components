import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { items } from '../../utilities/navItems';

import { AnchorTag } from '../AnchorTag';
import { Outlet } from 'react-router-dom';


export const Layout = () => {

  const drawerWidth = 350
  return (
    <div className='container'>
      <Sidebar
        isAnimated
        drawerWidth={drawerWidth}
      >
        {items.map(item => (
          <AnchorTag
            key={item.id}
            href={item.href}
            label={item.label}
            color='white'
            marginTop={item.id === 1 ? '2.5rem' : ''}
            padding='1.5rem'
          />
        ))}
      </Sidebar>

      <div className="right-layout" >
        <Header >
        </Header>
        <Outlet />
      </div>

    </div>
  )
}
