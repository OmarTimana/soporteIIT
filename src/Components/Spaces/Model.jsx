import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Box } from "@mui/material";

export default function Model({onClose, data}) {
    if (data == null) return null

    const {name, nEquipment, programs} = data

    return(
        <>
            <Dialog open={data != null} onClose={onClose}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <span>Numero de equipos: {nEquipment}</span>
                        <span>
                            Programas: {programs.map(it => it.name).join(" | ")}
                        </span>
                    </DialogContentText>
                    <Button onClick={onClose}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}