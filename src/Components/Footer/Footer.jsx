

import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import uLogo from '/Logo_Universidad.png'

import Office from '@mui/icons-material/Business';
import Mail from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';

export default function Footer() {

    return(

        <Box name="footer" id="footer" className='bg-slate-900 text-white p-5'>

            <Grid container spacing={4} className="flex mx-5 flex-row justify-center items-center">

                <Grid lg={3} md={6} xs={12}>
                    <Box className='flex justify-center'>
                        <img src={uLogo} alt="" className='w-32'/>
                    </Box>
                </Grid>

                <Grid lg={3} xs={12} className='flex flex-col gap-2 items-center my-auto mx-auto text-center xl:max-2xl:text-right'>
                    <Phone sx={{transform: 'scale(2.5)'}} color='inherit'/>
                    <Typography>
                        Llamanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>Conmutador: 7244309 Ext: <b>1118</b></p>
                    </Box>
                </Grid>

                <Grid lg={3} xs={12} className='flex flex-col gap-2 items-center my-auto mx-auto text-center xl:max-2xl:text-right'>
                    <Mail sx={{transform: 'scale(2.5)'}} color='inherit'/>
                    <Typography>
                        Contactanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>usm@udenar.edu.co</p>
                        <p>infraestructura.tic@udenar.edu.co</p>
                    </Box>
                </Grid>

                <Grid lg={3} xs={12} className='flex flex-col gap-2 items-center my-auto mx-auto text-center xl:max-2xl:text-right'>
                    <Office sx={{transform: 'scale(2.5)'}} color='inherit'/>
                    <Typography>
                        Visitanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>Horarios de Atención: 7 a.m a 8 p.m</p>
                        <p>Bloque Tecnologico, Piso 3 Oficina X</p>
                    </Box>
                </Grid>

            </Grid>

        </Box>

    )
    
}