import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Pricing from './Pages/Pricing.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import International from './Components/International.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"about",
    element:<About/>,
  },
  {
    path:"pricing",
    element:<Pricing/>,
  },
  {
    path:"services",
    element:<Services/>,
  },
  {
    path:"contact",
    element:<Contact/>,
  },
  {
    path:"services",
    element:<Services/>,
  },
  {
    path:"international",
    element:<International/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
