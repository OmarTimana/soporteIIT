
import { Routes, Route } from 'react-router-dom'
import Home from './Components/ContentPages/Home'
import Footer from './Components/Footer/Footer'
import ClassRoom from './Components/Spaces/ClassRoom'


function App() {

  return (

    <>

      <Routes>
        <Route path="/classrooms" element={<ClassRoom/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>

    </>

  )

}

export default App
