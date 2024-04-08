import { Button, Container, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import img from '../../../public/example.svg'
import { NavLink as Link } from "react-router-dom";


export default function Spaces() {

    return(

        <>

            <Box id='about' name='about' className='bg-gray-200 w-full flex flex-row items-center py-6'>
                
                <Container>
    
                    <h1 className='text-2xl text-center font-bold pb-4'>Nuestros Espacios</h1>
    
                    <Grid container spacing={4}>
                        
                        <Grid sm={12}>
                            Nuestra oficina se encuentra ubicada en el 3er piso del bloque tecnologico
                        </Grid>
    
                        <Grid sm={12} className='mx-auto'>
                            <img src={img} alt="" className='w-64 mx-auto'/>
                        </Grid>
    
                        <Grid>

                            Ademas de esto, brindamos soporte a todas las aulas del bloque tecnologico
                            <br />

                            <Button color="primary">
                                <Link target="_blank" to="/classrooms">Conocer más sobre las aulas...</Link>
                            </Button>
        
                        </Grid>
    
                    </Grid>
            
                </Container>
    
            </Box>

        </>
    )
}



{/* <Box id='spaces' name='spaces' className='bg-gray-300 w-full flex flex-row py-6'>
            
<Container className="w-full">

    <Grid container spacing={4}>

    <h1 className='text-2xl text-center pt-3 font-bold pb-4'>Nuestros Espacios</h1>

        
        <Grid sm={12}>
            
            Nuestra oficina se encuentra ubicada en el 3er piso del bloque tecnologico
        </Grid>

        <Grid sm={12}>

            <img src={img} alt="" className='w-64 mx-auto'/>

        </Grid>

        <Grid>

            Ademas de esto, brindamos soporte a todas las aulas del bloque tecnologico
            <br />

            <Button color="primary">
                <Link target="_blank" to="/classrooms">Conocer más sobre las aulas...</Link>
            </Button>

        </Grid>

    </Grid>

</Container>

</Box> */}