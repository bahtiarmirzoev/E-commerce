import About from "./About";
import { Children } from "react";
import Login from "./Login";
import Register from "./Register";
import App from "../App";
import Home from "./Home";
import Contact from "./Contact";
import News from "./News";
import Catalog from "./Catalog";
const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path:"Register",
          element:<Register/>
        },
        {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact/>
          },
          {
            path:"Home",
            element: <Home/>
          },
          {
            path:"News",
            element: <News/>
          },
          {
            path:"Catalog",
            element: <Catalog/>
          }
    ]
    }
    
]

export default routes;