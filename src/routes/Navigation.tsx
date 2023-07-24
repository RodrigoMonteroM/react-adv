import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {lazy} from "react"; 
//import Home from '../pages/home'
//import About from '../pages/About'
//import Users from '../pages/Users'
import {routes} from "./routes";
import NavigationLazy from '../01-lazyload/router/NavigationLazy';




const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route) => {
            return <Route key={route.name} path={route.path} element={<route.Component />} />
          })
        }
        {/* <NavigationLazy /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation