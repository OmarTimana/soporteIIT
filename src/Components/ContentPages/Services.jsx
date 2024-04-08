import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import { NavLink as Link } from "react-router-dom";

import services from "../../helper/services.json"
import Service from "../ServicesExt/Service";


export default function Services() {
    return(
        <>

        <Box  className=' bg-gray-300 w-full flex flex-row items-center'>
        
            <Container>

                <Grid container spacing={4} className="flex flex-col items-center justify-around py-4">

                    {
                        services.map( (service) => <Service key={service.id} service={service}/>)
                    }

                </Grid>

            </Container>
        </Box>

        </>
    )
}