import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography, Paper, Divider, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Carousel from 'react-material-ui-carousel'
import ItemModal from './ItemModal'

export default function Model({onClose, data}) {
    if (data == null) return null

    const {name, nEquipment,reference, images, equipment, programs} = data

    return(
        <>
            <Dialog open={data != null} onClose={onClose}>
                <DialogTitle>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Paper>
                            <Carousel>
                                {
                                    images.map( (item) => <ItemModal key={item.id} item={item} /> )
                                }
                            </Carousel>


                        </Paper>
                        <Box className="flex flex-1 flex-col gap-1 h-auto">
                            <Divider sx={{border: 1}}/>
                            <Paper className="flex items-center h-14 px-4">
                                <p>
                                    <b>Numero de Equipos:</b> 
                                </p>
                                &ensp;
                                <p>
                                    {nEquipment}
                                </p>
                            </Paper>

                            <Paper className="flex items-center h-14 shadow-2xl px-4">
                                <p>
                                    <b>Referencia Equipos:</b> 
                                </p>
                                &ensp;
                                <p>
                                    {reference}
                                </p>
                            </Paper>

                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                >
                                    <p>
                                        <b>Hardware Equipos:</b>
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {equipment.map((item, index) => (
                                        <ul key={item.index} className="list-disc px-8">
                                            <span>
                                                <li>Ram:&ensp;{item.ram}</li>
                                            </span>
                                            <span>
                                                <li>Procesador:&ensp;{item.proccesor}</li>
                                            </span>
                                        </ul>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                >
                                    <p>
                                        <b>Programas Instalados:</b>
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {programs.map((item) => (
                                        <ul key={item.name} className="list-disc px-8">
                                            <li>{item.name}</li>
                                        </ul>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                        </Box>
                        {/* <span><b>Numero de Equipos:</b> {nEquipment}</span>
                        <br />
                        <span><b>Referencia Equipos:</b> {reference}</span>
                        <br />
                        <span>
                            <b>Componentes:</b> { equipment.map((item, index) => (
                                
                            ))
                            }
                        </span>
                        <span>
                            <b>Programas Instalados:</b> {programs.map(item => (
                                <ul key={item.name}>
                                    <li>{item.name}</li>
                                </ul>
                            ))}
                        </span> */}
                    </DialogContentText>
                    <Button onClick={onClose}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}