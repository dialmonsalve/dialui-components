import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { NavigationLink } from '../ui/NavigationLink';
import { useSidebar } from '@/hooks/context';


export const Layout = () => {

  const { closeSidebar } = useSidebar()

  const drawerWidth = 350
  return (
    <div className='container'>
      <Sidebar
        isAnimated
        drawerWidth={drawerWidth}
      >
        <li className={`item item--active`} onClick={closeSidebar}  >
          <NavigationLink to="/" size='wf-100' style={{ fontSize: "20px", height: "45px" }}>
            home
          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/icon-spinner" style={{ fontSize: "20px", height: "45px" }} color={"white"} size='wf-100'  >
            Icon Spinner
          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/buttons" style={{ fontSize: "20px", height: "45px" }} color={"white"} size='wf-100'>
            Buttons
          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/modal" style={{ fontSize: "20px", height: "45px" }} color={"white"} size='wf-100'>
            modal
          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/notification" style={{ fontSize: "20px", height: "45px" }} color={"white"} size='wf-100'>
            Notification

          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/navigation-link" color={"white"} style={{ fontSize: "20px", height: "45px" }} size='wf-100'>
            link
          </NavigationLink>
        </li>

        <li className={`item item--active`} onClick={closeSidebar}>
          <NavigationLink to="/spinner" color={"white"} style={{ fontSize: "20px", height: "45px" }} size='wf-100'>
            spinner
          </NavigationLink>
        </li>

      </Sidebar>

      <div className="right-layout" >
        <Header >
        </Header>
        <Outlet />
      </div>

    </div>
  )
}
