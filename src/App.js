import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Mailbox from './Components/Mailbox'
import Analytics from './Components/Analytics'
import Dashboard from './Components/Dashboard'
import Friends from './Components/Friends'
import Images from './Components/Images'
import Sai2 from './Components/sai2'
import Sai3 from './Components/sai3'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Sidebar>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/mailbox' element={<Mailbox/>}/>
           <Route path='/analytics' element={<Analytics/>}/>
           <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/friends' element={<Friends/>}/>
           <Route path='/images' element={<Images/>}>
              <Route path='/images/sai2' element={<Sai2/>}/>
              <Route path='/images/sai3' element={<Sai3/>}/>
           </Route>
         </Routes>
         </Sidebar>
      </BrowserRouter>
      
    </>
  )
}

export default App