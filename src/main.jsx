import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Certificado from './components/Certificado';
// import UseProvider from './context/UseProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <UseProvider> */}
    <Routes>
      <Route element={<Navbar/>} >
        <Route index element={<App />} />
        <Route path='estudios' element={<Certificado />} />
      </Route>
    </Routes>
  {/* </UseProvider> */}
  </BrowserRouter>
)
