import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'

function App() {

  return (
    <div className='bg-white text-black'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
