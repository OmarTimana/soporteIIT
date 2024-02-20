
import { Box, Button } from '@mui/material'

import Navbar from './Components/Navbar/Navbar'

import About from './Components/ContentPages/About'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Spaces from './Components/ContentPages/Spaces'
import Services from './Components/ContentPages/Services'
import ClassRoom from './Components/Spaces/ClassRoom'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {

  return (

    <>

      <Routes>
        <Route path='/classrooms' element={<ClassRoom />}></Route>
      </Routes>

      <Navbar/>



      <Box className='bg-gray-300 w-full flex flex-row items-center pt-3 pb-8'>
        <Carousel/>
      </Box>

      <Box id='about' name='about' className='bg-gray-200 w-full flex flex-row items-center py-6 xl:h-screen'>
        <About/>
      </Box>

      <Box id='services' name='services' className=' bg-gray-300 w-full flex flex-row items-center py-6 xl:h-screen'>
        <Services/>
      </Box>

      <Box id='spaces' name='spaces' className='bg-gray-200 w-full flex flex-row items-center py-6 xl:h-screen'>
        <Spaces/>
        <Button color="primary" variant="h5">
          <a href='/classrooms'> Saber mass </a>
        </Button>
      </Box>

      <Box>
        

      </Box>

      <Box name="footer" id="footer" className='bg-slate-900 text-white p-5'>
        <Footer/>
      </Box>

    </>

  )

}

export default App
