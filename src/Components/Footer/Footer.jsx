

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import uLogo from '/Logo_Universidad.png'

export default function Footer() {

    return(

        <Box name="footer" id="footer" className='bg-slate-900 text-white p-5'>

            <Grid container spacing={4}>

                <Grid lg={4} md={6} xs={12}  className='my-auto max-xl:flex justify-center'>
                    <img src={uLogo} alt="" className='w-32'/>
                </Grid>

                <Grid lg={4} md={6} xs={12} className='my-auto mx-auto text-center justify-items-center'>
                    Horarios de Atencion:
                    <br />
                    7am - 1pm
                    <br />
                    2pm - 8pm
                    <br />
                    Sede Torobajo - Bloque tecnologico Piso 3
                </Grid>

                <Grid lg={4} xs={12} className='my-auto mx-auto text-center xl:max-2xl:text-right'>
                    Contanctanos a traves de los siguientes correos: 
                    <br />
                    usm@udenar.edu.co
                    <br />
                    infraestructura.tic@udenar.edu.co
                    <br />
                    Telefono: 7244309 Ext: 1118
                </Grid>

            </Grid>

        </Box>

    )
    
}