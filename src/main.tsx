import ReactDOM from 'react-dom/client'
import { RouterProvider  } from 'react-router-dom'
import { routes } from './routes'
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <RouterProvider
    router={routes}
  />
);