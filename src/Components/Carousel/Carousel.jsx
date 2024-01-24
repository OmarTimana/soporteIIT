import { Container, Paper } from "@mui/material";

import CarouselF from 'react-material-ui-carousel'

import Item from "./Item";

import events from "../../helper/events.json"


export default function Carousel() {

    return(
        <>
            <Container>

                <h1 className="font-bold text-3xl text-center mb-4">Acompanamientos Recientes</h1>

                <Paper className="p-3">
                    <CarouselF className="">
                        {
                            events.map( (item) => <Item key={item.id} item={item} /> )
                        }
                    </CarouselF>
                </Paper>

            </Container>
        </>
    )
}
