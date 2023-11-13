import React from 'react'
import './App.css'
import Form from './form'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='main'>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
