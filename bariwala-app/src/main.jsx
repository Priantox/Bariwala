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
import SignIn from './Components/InsideNavbar/SignIn/SIgnIn.jsx';
import SignUp from './Components/InsideNavbar/SignUp/SignUp.jsx';
import Buy from './Components/InsideNavbar/Buy/Buy.jsx';
import Rent from './Components/InsideNavbar/Rent/Rent.jsx';
import Sell from './Components/InsideNavbar/Sell/Sell.jsx';



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
        path: "/buy",
        element: <Buy/>
      },

      {
        path: "/sell",
        element: <Sell/>
      },

      {
        path: "/rent",
        element: <Rent/>
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
