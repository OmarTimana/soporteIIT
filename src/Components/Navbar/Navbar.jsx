import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"
import NavbarListDrawer from "./NavbarDrawer"
import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    {title: "Sobre Nosotros", path: "#about", icon: <MenuIcon></MenuIcon>},
    {title: "Misión", path: "#mision", icon: <MenuIcon></MenuIcon>},
    {title: "Visión", path: "#vision", icon: <MenuIcon></MenuIcon>},
    {title: "Nuestros Servicios", path: "#services", icon: <MenuIcon></MenuIcon>},
    {title: "Nuestras Instalaciones", path: "#spaces", icon: <MenuIcon></MenuIcon>}
]

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="static">
                <Toolbar>

                    <Button>
                        <img src={iitLogo} alt="Logo_Soporte" width={180} />
                    </Button>
                    <Typography sx={{flexGrow:1}}></Typography>

                    <Box sx={{display:{xs:"none", lg:"flex"}}}>
                        {
                            navLinks.map( item => (
                                <Button color="inherit" variant="h5" component="a" href={item.path} key={item.title}>{item.title}</Button>
                            ))
                        }
                    </Box>



                    <IconButton onClick={ () => setOpen(true) } sx={{display: {xs:"flex", lg:"none"}}}>
                        <MenuIcon sx={{fontSize: 38}} ></MenuIcon>
                    </IconButton>

                </Toolbar>
            </AppBar>


            {/* ------------------------------------ */}
        
            <Drawer open={open} anchor="right" onClose={ ()=>setOpen(false) } sx={{display: {xs:"flex", lg:"none"}}}>
                <NavbarListDrawer navLinks={navLinks}></NavbarListDrawer>
            </Drawer>
        </>
    )

}