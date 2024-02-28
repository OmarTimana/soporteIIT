import manuals from "../../helper/manuals.json"
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar2 from "../Navbar/Navbar2";


export default function Manuals() {
    
    return(
        <>

            <Navbar2/>

            <Container className="p-6">

                <Typography className="text-center" gutterBottom variant="h4" component="div">
                    Manuales Disponibles
                </Typography>

                <Grid container spacing={7} justifyContent={'center'} alignItems={'center'}>

                    {manuals.map( (item) => (
                        <Grid key={item.id}>
                            <Card key={item.id} sx={{ maxWidth: 300 }} className="text-center">

                                <CardMedia className="-mb-4" component='img' sx={{ height: 310, objectFit: "cover"}} image={item.qr} alt={item.title}>
                                </CardMedia>

                                <CardContent className="text-center -mb-6">

                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    
                                </CardContent>

                                <CardActions>
                                    <Button component="a" href={item.url} target="_blank" className="text-center" size="small" color="primary">
                                    Descargar Instalador
                                    </Button>
                                </CardActions>

                            </Card>

                        </Grid>

                    ))}

                </Grid>

            </Container>
            
        </>
    )
}

