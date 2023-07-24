import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Home from '../pages/home'
//import About from '../pages/About'
//import Users from '../pages/Users'
import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LazyPage />}/>
        <Route path='/lazypage2' element={<LazyPage2 />}/>
        <Route path='/lazypage3' element={<LazyPage3 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation