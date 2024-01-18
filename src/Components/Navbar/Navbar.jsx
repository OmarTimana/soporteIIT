import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
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

                    {
                        navLinks.map( item => (
                            <Button color="inherit" variant="h5" component="a" href={item.path} key={item.title}>{item.title}</Button>
                        ))
                    }

                    <IconButton onClick={ () => setOpen(true) } sx={{justifySelf:"flex-end", display: {xl:"none", md:"none", sm:"block"}}}>
                        <MenuIcon sx={{fontSize: 38}} ></MenuIcon>
                    </IconButton>

                </Toolbar>
            </AppBar>


            {/* ------------------------------------ */}
        
            <Drawer open={open} onClose={ ()=>setOpen(false) }>
                <NavbarListDrawer navLinks={navLinks}></NavbarListDrawer>
            </Drawer>
        </>
    )

}