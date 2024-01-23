
import { Box } from '@mui/material'

import Navbar from './Components/Navbar/Navbar'

import About from './Components/ContentPages/About'
import Carousel from './Components/ContentPages/Carousel'
import Footer from './Components/Footer/Footer'
import Spaces from './Components/ContentPages/Spaces'
import Services from './Components/ContentPages/Services'

function App() {

  return (

    <>

      <Box>
        <Navbar></Navbar>
      </Box>

      <Box className='bg-gray-300 w-full h-screen flex flex-row items-center'>
        <Carousel></Carousel>
      </Box>

      <Box className='bg-gray-200 w-full h-screen flex flex-row items-center'>
        <About></About>
      </Box>

      <Box className='bg-gray-300 w-full h-screen flex flex-row items-center'>
        <Services></Services>
      </Box>

      <Box className='bg-gray-200 w-full h-screen flex flex-row items-center'>
        <Spaces></Spaces>
      </Box>

      <Box name="footer" id="footer" className='bg-slate-900 text-white p-5'>
        <Footer></Footer>
      </Box>

        {/* 

            <section className='Content'>

              <div name='about' id='about' className='bg-gray-300 w-full h-screen flex flex-row items-center'>

                <div className='w-1/2 p-32'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa reprehenderit laudantium illum quidem minima dignissimos consectetur? Suscipit consequatur nesciunt quisquam animi, natus ducimus quis delectus nemo incidunt perspiciatis ex.

                  <Button variant='contained'>Hello word!</Button>
                </div>

                <div className='w-1/2'>
                  <img src={img} alt="" className='w-96 h-96 mx-auto'/>
                </div>

              </div>

              <div name='mision' id='mision' className='bg-gray-200 w-full h-screen flex flex-row-reverse items-center'>

                <div className='w-1/2 p-32'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa reprehenderit laudantium illum quidem minima dignissimos consectetur? Suscipit consequatur nesciunt quisquam animi, natus ducimus quis delectus nemo incidunt perspiciatis ex.
                </div>

                <div className='w-1/2'>
                  <img src={img} alt="" className='w-96 h-96 mx-auto'/>
                </div>

              </div>
                
              <div name='vision' id='vision' className='bg-gray-300 w-full h-screen flex flex-row items-center'>

                <div className='w-1/2 p-32'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa reprehenderit laudantium illum quidem minima dignissimos consectetur? Suscipit consequatur nesciunt quisquam animi, natus ducimus quis delectus nemo incidunt perspiciatis ex.
                </div>

                <div className='w-1/2'>
                  <img src={img} alt="" className='w-96 h-96 mx-auto'/>
                </div>

              </div>

              <div name='services' id='services' className='bg-gray-200 w-full h-screen flex flex-row-reverse items-center'>

                <div className='w-1/2 p-32'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa reprehenderit laudantium illum quidem minima dignissimos consectetur? Suscipit consequatur nesciunt quisquam animi, natus ducimus quis delectus nemo incidunt perspiciatis ex.
                </div>

                <div className='w-1/2'>
                  <img src={img} alt="" className='w-96 h-96 mx-auto'/>
                </div>

              </div>

            </section>

        */}

    </>

  )

}

export default App
