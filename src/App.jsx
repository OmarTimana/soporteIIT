
import uLogo from '/Logo_Universidad.png'
import img from '/example.svg'

import Navbar from './Components/Navbar/Navbar'

import { Box, Button } from '@mui/material'



function App() {

  return (
    <>
    <Box>
      <Navbar></Navbar>
    </Box>


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


    <section className='Footer bg-slate-900 h-34 py-4 px-12 flex flex-row'>

      <div className='w-1/3'>
        <img src={uLogo} alt="" className='w-28'/>
      </div>

      <div className='w-1/3 text-white'>
        Horarios de Atencion:
        <br />
        7am - 1pm
        <br />
        2pm - 8pm
        <br />
        Sede Torobajo - Bloque tecnologico Piso 3
      </div>

      <div className='w-1/3 text-white'>
        Contanctanos a traves de los siguientes correos: 
        <br />
        usm@udenar.edu.co
        <br />
        infraestructura.tic@udenar.edu.co
        <br />
        Telefono: 7244309 Ext: 1118
      </div>

    </section>
    </>
  )
}

export default App
