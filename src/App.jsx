
import { Routes, Route } from 'react-router-dom'
import Home from './Components/ContentPages/Home'
import Footer from './Components/Footer/Footer'
import ClassRoom from './Components/Spaces/ClassRoom'
import Manuals from './Components/ServicesExt/Manuals'


function App() {

  return (

    <>

      <Routes>
        <Route path="/classrooms" element={<ClassRoom/>}/>
        <Route path="/manuals" element={<Manuals/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>

    </>

  )

}

export default App
