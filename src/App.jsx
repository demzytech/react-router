
import './App.css'
import Navigation from './Components/Navigation'
import { Route, Routes } from "react-router-dom"
import Newerversions from './Components/pages/Newerversions'
import Home from './Components/pages/Home'
import SearchBar from './Components/searchbar'


function App() {


  return (
    <>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newversions" element={<Newerversions/>} />
    </Routes>
    </>
  )
}

export default App
