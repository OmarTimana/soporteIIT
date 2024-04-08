import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Box, Fab } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Carousel from 'react-material-ui-carousel'
import ItemModal from './ItemModal'

export default function Model({onClose, data}) {
    if (data == null) return null

    const {name, nEquipment,reference, images, equipment, programs} = data

    return(
        <>
            <Dialog open={data != null} onClose={onClose} fullWidth={true} maxWidth='md'>
                <DialogTitle className="text-center">
                    <Typography variant="h4">
                        {name}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        <Paper className="p-4 mt-1">
                            <Carousel navButtonsAlwaysVisible={true} navButtonsProps={{style: {opacity:0.7}}}>
                                {
                                    images.map( (item) => <ItemModal key={item.id} item={item} /> )
                                }
                            </Carousel>
                        </Paper>
                        <Box className="flex flex-1 flex-col gap-1 h-auto pt-1">
                            {/* <Divider sx={{border: 1}}/> */}
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
                                        <ul key={index} className="list-disc px-8">
                                            <span>
                                                <li>Ram:&ensp;{item.ram}</li>
                                            </span>
                                            <span>
                                                <li>Procesador:&ensp;{item.proccesor}</li>
                                            </span>
                                            <span>
                                                <li>Tarjeta Grafica:&ensp;{item.graphic}</li>
                                            </span>
                                            <span>
                                                <li>Placa Madre:&ensp;{item.motherboard}</li>
                                            </span>
                                            <span>
                                                <li>Chasis:&ensp;{item.chassis}</li>
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
                    </DialogContentText>
                    <Button variant="outlined" color="error" className="h-12 w-full" sx={{marginTop:1, border:1.5}} onClick={onClose}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}