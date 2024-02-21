import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"

import { useState } from "react"

import iitLogo from '/logo_SIIT.png'


import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';


import { HashLink as Link } from "react-router-hash-link";
import NavbarListDrawer2 from "./NavbarDrawer2";

const navLinks = [
    {title: "Inicio", path: "/", icon: <HomeIcon></HomeIcon>},
]

export default function Navbar2() {

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
                
                <NavbarListDrawer2 navLinks={navLinks} link={Link} setOpen={setOpen}></NavbarListDrawer2>

            </Drawer>

        </>
        
    )

}