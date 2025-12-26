import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LogIn from './LogIn.jsx'
import SignUp from './SignUp.jsx'
import Detail_product from './Detail_product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/detailproduct/:id" element={<Detail_product/>}/>
      </Routes>

   </BrowserRouter>
  </StrictMode>,
)
