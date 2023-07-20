
import { RouteObject,  createBrowserRouter } from 'react-router-dom'

import { Layout } from "../components/layout/Layout";
import { NotFound } from "../components/pages/NotFound";
import { Buttons } from '../components/pages/Buttons';
import { Home } from '../components/pages/Home';
import { Modals } from '../components/pages/Modals';
import { Alerts } from '../components/pages/Alerts';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: '/buttons',
        element: <Buttons />
      },
      {
        path: '/modal',
        element: <Modals />
      },
      {
        path: '/alerts',
        element: <Alerts />
      },

    ]
  }
];


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const router = createBrowserRouter(routes)

