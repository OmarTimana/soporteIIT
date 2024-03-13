import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Container, Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import classrooms from "../../helper/classrooms.json"
import { useState } from "react";

export default function ClassRoom() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    
  return(
    
      
    <>

      <Container className="p-6">

            <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>

                {classrooms.map( (item) => (
                    <Grid key={item.id}>
                        <Card key={item.id} sx={{ maxWidth: 360, maxHeight: 480 }}>

                            <CardActionArea key={item.id}>

                                <CardMedia component='img' height={200} sx={{maxHeight: 200}} image={item.img} alt={item.name}>
                                </CardMedia>

                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    
                                </CardContent>

                            </CardActionArea>


                            <CardActions>

                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Conocer mas
                                </Button>
                                
                            </CardActions>

                        </Card>

                    </Grid>
                    
                ))}


                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle> Prueba Modal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Texto de prueba
                        </DialogContentText>
                    </DialogContent>
                </Dialog>


            </Grid>

      </Container>

    </>

  )
}