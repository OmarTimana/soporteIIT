import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Container } from '@mui/material';

import img from '../../../public/example.svg'

export default function About() {
    
    return(

        <Box id='about' name='about' className='bg-gray-200 w-full flex flex-row items-center py-6 xl:h-screen'>
                
            <Container>

                <h1 className='text-2xl text-center font-bold pb-4'>Sobre Nosotros</h1>

                <Grid container spacing={4}>
                    
                    <Grid sm={12}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptas, facilis commodi cumque dolorem recusandae consequuntur eum numquam minima exercitationem autem adipisci fugiat, laboriosam magni? Quia nam corporis possimus! Deserunt!
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

    )

}