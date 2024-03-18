import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Box } from "@mui/material";

export default function Model({open, onClose, name, nEquipment, programs}) {

    return(
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Numero de equipos: {nEquipment}

                    </DialogContentText>
                    

                    <Button onClick={onClose}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}