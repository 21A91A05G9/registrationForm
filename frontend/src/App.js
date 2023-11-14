import React from 'react'
import './App.css'
import Register from './register';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='main'>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
