import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"
import NavbarListDrawer from "./NavbarDrawer"
import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutIcon from '@mui/icons-material/Groups2';
import SpacesIcon from '@mui/icons-material/Apartment';

const navLinks = [
    {title: "Inicio", path: "/", icon: <HomeIcon></HomeIcon>},
    {title: "Sobre Nosotros", path: "#mision", icon: <AboutIcon></AboutIcon>},
    {title: "Servicios", path: "#services", icon: <ServicesIcon></ServicesIcon>},
    {title: "Nuestras Instalaciones", path: "#spaces", icon: <SpacesIcon></SpacesIcon>}
]

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="static">
                <Toolbar>

                    <Button component="a" href="/">
                        <img src={iitLogo} alt="Logo_Soporte" width={300} />
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