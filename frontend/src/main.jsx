import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Order from './pages/Order.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route element={<App />} path='/'></Route>
          <Route element={<Order />} path='/order'></Route>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
