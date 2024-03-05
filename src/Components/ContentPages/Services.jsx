import { Container, Box, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { NavLink as Link } from "react-router-dom";

import manual from "../../assets/Sicons/manual.png"


export default function Services() {
    return(
        <>

        <Box  className=' bg-gray-300 w-full flex flex-row items-center pt-3'>
        
            <Container>

                <Grid container spacing={4} className="flex flex-col items-center justify-around">

                    <Grid>
                        <Button color="primary" className="flex flex-col gap-4" component={Link} target="_blank" to="/manuals">
                            <img src={manual} alt="" width={65} />
                            Manuales de Instalación
                        </Button>
                    </Grid>

                    <Grid>
                        <Button color="primary" className="flex flex-col gap-4" component={Link} target="_blank" to="/manuals">
                            <img src={manual} alt="" width={65} />
                            Manuales de Instalación
                        </Button>
                    </Grid>

                    <Grid>
                        <Button color="primary" className="flex flex-col gap-4" component={Link} target="_blank" to="/manuals">
                            <img src={manual} alt="" width={65} />
                            Manuales de Instalación
                        </Button>
                    </Grid>

                    <Grid>
                        <Button color="primary" className="flex flex-col gap-4" component={Link} target="_blank" to="/manuals">
                            <img src={manual} alt="" width={65} />
                            Manuales de Instalación
                        </Button>
                    </Grid>



                </Grid>

            </Container>
        </Box>

        </>
    )
}