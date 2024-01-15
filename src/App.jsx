/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from "./style";
import Header from './Components/Header'
import LandingPage from './view/LandingPage';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Clients from './Components/Clients';
import Agencia from './Components/Agencia';
import Central from './Components/Central';
import Consultoria from './Components/Consultoria';

export default function App() {
  const location = useLocation();

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/nosotros' element={<About />}></Route>
        <Route path='/contacto' element={<Contacts />}></Route>
        <Route path='/clientes' element={<Clients />}></Route>
        <Route path='/agencia' element={<Agencia></Agencia>}></Route>
        <Route path='/central-de-medios' element={<Central></Central>}></Route>
        <Route path='/consultoria' element={<Consultoria></Consultoria>}></Route>
      </Routes>
    </>
  )
}
