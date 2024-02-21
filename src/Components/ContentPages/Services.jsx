import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import img from '../../../public/example.svg'

export default function Services() {
    return(
        <>

        <Box id='services' name='services' className=' bg-gray-300 w-full flex flex-row items-center py-6 xl:h-screen'>
        
            <Container>

                <h1 className='text-2xl text-center font-bold pb-4'>Nuestros Servicios</h1>
                <br />

                <Grid container spacing={4}>
                    
                    <Grid sm={12}>
                        Contamos con una variedad de servicios
                    </Grid>

                    <Grid sm={12} className='mx-auto'>
                        <img src={img} alt="" className='w-64 mx-auto'/>
                    </Grid>

                    <Grid>
                        <h1 className='text-xl font-bold'>Nuestra Misión</h1>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo placeat nisi alias, maxime optio non nihil libero amet sed! Labore aperiam sapiente voluptate molestiae incidunt in reiciendis delectus obcaecati.
                    </Grid>

                    <Grid>
                        <h1 className='text-xl font-bold'>Nuestra Visión</h1>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta velit mollitia cumque consequatur fuga culpa aliquid, voluptate quas! Repellat quas veniam possimus ullam fuga sed reiciendis quam cupiditate alias?
                    </Grid>

                </Grid>

            </Container>
        </Box>

        </>
    )
}