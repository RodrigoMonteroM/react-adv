import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/About'
import Users from '../pages/Users'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation