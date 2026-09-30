import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'

const App = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      


    </Routes>
    </>
  )
}



export default App
