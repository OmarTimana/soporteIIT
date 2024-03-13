
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ClassRoom from './Components/Spaces/ClassRoom'
import Manuals from './Components/ServicesExt/Manuals'
import About from './Components/ContentPages/About'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Spaces from './Components/ContentPages/Spaces'

function App() {

  return (

    <>  

      <Navbar/>

      <Routes>
        <Route path="/classrooms" element={<ClassRoom/>}/>
        <Route path="/manuals" element={<Manuals/>}/>
        <Route path='/' element={<Carousel/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/spaces' element={<Spaces/>}/>
      </Routes>

      <Footer/>

    </>

  )

}

export default App
