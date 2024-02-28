import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Container, Modal, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar2 from "../Navbar/Navbar2";

import classrooms from "../../helper/classrooms.json"

export default function ClassRoom() {
    
  return(
      
    <>

      <Navbar2/>

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
                              <Button size="medium" color="primary">
                                Conocer mas
                                <Modal>
                                    <Box>
                                        Texto del modal
                                    </Box>
                                </Modal>
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