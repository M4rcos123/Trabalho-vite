import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {Page1} from './pages/Page1'
import {Page2} from './pages/Page2'
import {Page3} from './pages/Page3'
import App from './App'
//import {} from './pages/page1'

export function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
             <Route  path='/' element={<App/>} />
             <Route  path='/Page1' element={<Page1/>}  />
             <Route  path='/Page2' element={<Page2/>}  />
             <Route  path='/Page3' element={<Page3/>}  />
        </Routes>
   
  
    
    
      </BrowserRouter>
    </>
  
  )
}
