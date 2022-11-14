import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Descripcion from './components/Descripcion';
import Inicio from './components/Inicio';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='descripcion' element={<Descripcion />} />
        <Route path='' element={<Inicio />} />
      </Route>
    </Routes>   
  </BrowserRouter>
)
