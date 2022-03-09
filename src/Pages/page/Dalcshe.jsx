import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Auto from './Auto/Auto'
import Auto_1 from './Auto/Auto_1'
import Auto_2 from './Auto/Auto_2'
import Auto_3 from './Auto/Auto_3'
import Page from './Page'
const Dalcshe = () => {
  return (
    <div>
<BrowserRouter>
<Page/>
   <Routes>
     <Route  path='/Auto' element={<Auto/>} />
     <Route path='/Auto_1' element={ <Auto_1/>} />
     <Route path='/Auto_2' element={<Auto_2/>} />
     <Route path='/Auto_3' element={<Auto_3/> } />
     <Route path='/' element={} />
   </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Dalcshe