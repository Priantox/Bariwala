import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import NotFound from './Components/InsideNavbar/NotFound/NotFound.jsx';
import About from './Components/InsideNavbar/About/About.jsx';
import Explore from './Components/InsideNavbar/Explore/Explore.jsx';
import Contact from './Components/InsideNavbar/Contact/Contact.jsx';
import SignIn from './Components/InsideNavbar/SignIn/SignIn.jsx';
import SignUp from './Components/InsideNavbar/SignUp/SignUp.jsx';
import Add_property from './Components/InsideNavbar/Add_property/Add_property.jsx';
import Dashboard from './Components/InsideNavbar/Dashboard/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        path: "*",
        element: <NotFound/>,
      },

      {
        path: "/dashboard",
        element: <Dashboard/>,
      },

      {
        path: "/addproperty",
        element: <Add_property/>,
      },

      {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/explore",
        element: <Explore/>,
      },

      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  },

  {
    path: "/signin",
    element: <SignIn/>,
  },

  {
    path: "/signup",
    element: <SignUp/>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
