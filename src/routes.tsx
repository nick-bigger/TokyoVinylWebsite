import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Schedule } from './pages/Schedule';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/schedule",
        element: <Schedule />
      }
    ]
  }
]);
