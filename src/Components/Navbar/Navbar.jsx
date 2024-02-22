import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"

import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import NavbarListDrawer from "./NavbarDrawer"

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutIcon from '@mui/icons-material/Groups2';
import SpacesIcon from '@mui/icons-material/Apartment';

import { HashLink as Link } from "react-router-hash-link";



const navLinks = [
    {title: "Inicio", path: "/", icon: <HomeIcon></HomeIcon>},
    {title: "Sobre Nosotros", path: "#about", icon: <AboutIcon></AboutIcon>},
    {title: "Servicios", path: "#services", icon: <ServicesIcon></ServicesIcon>},
    {title: "Nuestras Instalaciones", path: "#spaces", icon: <SpacesIcon></SpacesIcon>}
]

export default function Navbar() {





    const [open, setOpen] = useState(false)

    return(

        <>

            <AppBar position='static'>

                <Toolbar>

                    <Button>

                        <img src={iitLogo} alt="Logo_Soporte" width={260} />

                    </Button>

                    <Typography sx={{flexGrow:1}}></Typography>

                    <Box sx={{display:{xs:"none", lg:"flex"}}}>

                        {
                            navLinks.map( item => (

                                <Button color="inherit" variant="h5" component={Link} to={item.path} key={item.title} smooth='true'>{item.title}</Button>
                            
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
                
                <NavbarListDrawer navLinks={navLinks} link={Link} setOpen={setOpen}></NavbarListDrawer>

            </Drawer>

        </>
        
    )

}
