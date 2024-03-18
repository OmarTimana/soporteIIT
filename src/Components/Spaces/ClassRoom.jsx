import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Container, Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import classrooms from "../../helper/classrooms.json"
import Model from "./Model";
import { useState } from "react";

export default function ClassRoom() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log(open)
    };

    const handleClose = () => {
        setOpen(false);
        console.log(open)
    };

    const [tempdata, setTempdata] = useState([])

    const getData = (name, nEquipment, programs) => {
        let tempData = [name, nEquipment, programs]
        setTempdata(item => [1, ...tempData])
        console.log(tempdata[3])
    }

    
  return(
    
 
      
    <>

      <Container className="p-6">

            <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>

                {classrooms.map( (item) => (
                    <Grid key={item.id}>
                        <Card key={item.id} sx={{ maxWidth: 360, maxHeight: 480 }}>

                            <CardActionArea key={item.id} onClick={handleClickOpen}>

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

                                <Button variant="outlined" onClick={()=>{handleClickOpen(); getData(item.name, item.nEquipment, item.programs)}}>
                                    Conocer mas...
                                </Button>
                                
                            </CardActions>

                        </Card>

                    </Grid>
                    
                ))}


                {/* <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle> Prueba Modal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Texto de prueba
                        </DialogContentText>
                    </DialogContent>
                </Dialog> */}


                <Model open={open} onClose={handleClose} name={tempdata[1]} nEquipment={tempdata[2]} programs={tempdata[3]}/>              


            </Grid>



      </Container>

    </>

  )
}