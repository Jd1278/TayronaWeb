import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Charcuterie from './pages/Charcuterie'
import Catering from './pages/Catering'
import FoodTruck from './pages/FoodTruck'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <ScrollToTop/>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charcuterie" element={<Charcuterie />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/foodtruck" element={<FoodTruck />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
