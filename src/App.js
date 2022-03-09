import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Ui from '../src/components/Ui.jsx'
import Or_1 from './Pages/avto/OR/Or_1';
import Avto from './Pages/avto/Avto';
import Page from './Pages/page/Page';
import Mir from './Pages/mir/Mir';
import Auto from './Pages/page/Auto/Auto';
import Header from './components/Header';
import Auto_1 from './Pages/page/Auto/Auto_1';
import Auto_2 from './Pages/page/Auto/Auto_2';
import Auto_3 from './Pages/page/Auto/Auto_3';
import Auto_4 from './Pages/page/Auto/Auto_4';

function App() {
  return (
   <BrowserRouter>
   <Ui/>
   <Routes>
     <Route  path='header' element={<Header/>} />
     <Route path='/page' element={ <Page/>} />
     <Route path='/avto' element={ <Avto/>} />
     <Route path='/mir' element={ <Mir/>} />
     <Route path='/Auto' element={<Auto/>} />
     <Route path='/Auto_1' element={<Auto_1/>} />
     <Route path='/Auto_2' element={<Auto_2/>} />
     <Route path='/Auto_3' element={<Auto_3/>} />
     <Route path='/Auto_4' element={<Auto_4/>} />
     <Route path='/Or_1' element={<Or_1/>} />
   </Routes>
    </BrowserRouter>
   
     

  )
   

}

export default App;
