import { Paper, Box } from "@mui/material";

import CarouselF from 'react-material-ui-carousel'

import Item from "./Item";

import events from "../../helper/events.json"
import Services from "../ContentPages/Services";


export default function Carousel() {

    return(

        <Box  id="top" name="top" className='bg-gray-300 w-full flex flex-row items-center pt-4'>

            <Box className="pb-3 w-full">

                <h1 className="font-bold text-3xl text-center mb-2">Eventos Recientes</h1>

                <Paper className="p-3" sx={{backgroundColor: "gray"}}>
                    <CarouselF className="bg-grey-500" navButtonsAlwaysVisible={true} navButtonsProps={{style: {opacity:0.5}}}>
                        {
                            events.map( (item) => <Item key={item.id} item={item} /> )
                        }
                    </CarouselF>
                </Paper>

                <Services/>

            </Box>

        </Box>

    )
    
}
