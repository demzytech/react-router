
import './App.css'
import Navigation from './Components/Navigation'
import { Route, Routes } from "react-router-dom"

import Home from './Components/pages/Home'
import SearchBar from './Components/searchbar'
import Contact from './Components/pages/Contact'
import Blog from './Components/pages/Blog'
import Login from './Components/pages/Login'
import Signup from './Components/pages/Signup'
import Posts from './Components/pages/Posts'


function App() {


  return (
    <>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/post" element={<Posts/>} />
    </Routes>
    </>
  )
}

export default App
