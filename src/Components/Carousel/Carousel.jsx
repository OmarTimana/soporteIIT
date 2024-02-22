import { Container, Paper, Box } from "@mui/material";

import CarouselF from 'react-material-ui-carousel'

import Item from "./Item";

import events from "../../helper/events.json"


export default function Carousel() {

    return(

        <Box className='bg-gray-300 w-full flex flex-row items-center pt-3 pb-8'>

            <Container className="p-2 w-1/2">

                <h1 className="font-bold text-3xl text-center mb-2">Eventos Recientes</h1>

                <Paper className="p-3" sx={{backgroundColor: "gray"}}>
                    <CarouselF className="bg-grey-500">
                        {
                            events.map( (item) => <Item key={item.id} item={item} /> )
                        }
                    </CarouselF>
                </Paper>

            </Container>

        </Box>

    )
    
}
