import { Container, Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { NavLink as Link } from "react-router-dom";

import img from '../../../public/example.svg'

export default function Services() {
    return(
        <>

        <Box id='services' name='services' className=' bg-gray-300 w-full flex flex-row items-center py-6 xl:h-screen'>
        
            <Container>

                <h1 className='text-2xl text-center font-bold pb-4'>Nuestros Servicios</h1>
                <br />

                <Grid container spacing={4}>
                    
                    <Grid sm={12} className='mx-auto'>
                        <img src={img} alt="" className='w-64 mx-auto'/>
                    </Grid>

                    <Grid sm={12}>
                        <Typography variant="h6">
                            Contamos con los siguientes servicios:
                        </Typography>
                    </Grid>


                    <Grid>
                        <ul className="text-lg list-disc">
                            <li>
                                Reservas del Auditorio o salas de conferencias
                            </li> 
                            <li>
                                Solicitudes de instalacion de software en aulas, conceptos tecnicos, dar de baja equipos
                            </li>
                        </ul>
                        <p className="text-lg font-semibold">
                            Para realizar estas solicitudes comuníquese por correo o teléfono con la oficina. 
                            <p>Correo: _usm@Udenar.edu.co</p> 
                            <p>Teléfono: 7244309 Ext. 1118</p>
                        </p>

                        <Box>
                            <p className="text-lg">Tambien puedes acceder a los manuales de instalacion disponibles</p>

                            <Button color="primary">
                                <Link target="_blank" to="/manuals">Manuales de Instalación</Link>
                            </Button>


                        </Box>

                    </Grid>



                </Grid>

            </Container>
        </Box>

        </>
    )
}