

import { Box, Typography } from '@mui/material';

import uLogo from '/Logo_Universidad.png'

import Office from '@mui/icons-material/Business';
import Mail from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';

export default function Footer() {

    return(

        <Box name="footer" id="footer" className='bg-slate-900 text-neutral-300 font-semibold p-5'>

            <Box className="flex py-2 flex-row flex-wrap gap-12 justify-around">

                <Box className='h-40 flex place-content-center'>
                    <img src={uLogo} width={170}/>
                </Box>

                <Box className='flex flex-col gap-4 items-center place-content-center text-center xl:max-2xl:text-right'>
                    <Phone className='xl:-mt-6' sx={{transform: 'scale(2.5)'}} color='inherit'/>
                    <Typography variant='h6' fontFamily={'bold'}>
                        Llamanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>Conmutador: 7244309 Ext: <b>1118</b></p>
                    </Box>
                </Box>

                <Box className='flex flex-col gap-4 items-center justify-center place-content-center text-center xl:max-2xl:text-right'>
                    <Mail className='xl:-mt-1' sx={{transform: 'scale(2.5)'}} color='inherit'/>
                    <Typography variant='h6' fontFamily={'bold'}>
                        Contactanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>soporteiit@udenar.edu.co</p>
                        <p>infraestructura.tic@udenar.edu.co</p>
                    </Box>
                </Box>

                <Box className='flex flex-col gap-4 items-center place-content-center text-center xl:max-2xl:text-right'>
                    <Office className='xl:mt-5' sx={{transform: 'scale(2.5)'}} color='inherit' />
                    <Typography variant='h6' fontFamily={'bold'}>
                        Visitanos
                    </Typography>
                    <Box className="mt-1 text-center">
                        <p>Horarios de Atención Lunes a Viernes: 7a.m a 8p.m</p>
                        <p>Horarios de Atención Sabados: 8a.m a 12m - 2p.m a 6p.m</p>
                        <p>Bloque Tecnologico, Piso 3</p>
                    </Box>
                </Box>

            </Box>

        </Box>

    )
    
}