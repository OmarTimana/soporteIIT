
import { Box } from '@mui/material'

import Navbar from './Components/Navbar/Navbar'

import About from './Components/ContentPages/About'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Spaces from './Components/ContentPages/Spaces'
import Services from './Components/ContentPages/Services'

function App() {

  return (

    <>

      <Box>
        <Navbar></Navbar>
      </Box>

      <Box className='bg-gray-300 w-full flex flex-row items-center pt-3 pb-8'>
        <Carousel></Carousel>
      </Box>

      <Box className='bg-gray-200 w-full flex flex-row items-center py-6'>
        <About></About>
      </Box>

      <Box className='bg-gray-300 w-full flex flex-row items-center py-6'>
        <Services></Services>
      </Box>

      <Box className='bg-gray-200 w-full flex flex-row items-center py-6'>
        <Spaces></Spaces>
      </Box>

      <Box name="footer" id="footer" className='bg-slate-900 text-white p-5'>
        <Footer></Footer>
      </Box>

    </>

  )

}

export default App
