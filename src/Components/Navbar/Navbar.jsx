import { AppBar, Drawer, IconButton, Toolbar, Box } from "@mui/material"

import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import NavbarListDrawer from "./NavbarDrawer"

import MenuIcon from '@mui/icons-material/Menu';

import { NavLink as Link, Link as Logo } from "react-router-dom"

import {Link as Scroll} from "react-scroll"

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(

        <>

            <AppBar position="sticky" className="">

                <Toolbar className="flex flex-1 justify-between">

                    <Logo to="/">

                        <img src={iitLogo} alt="Logo_Soporte" width={260} />

                    </Logo>
                    
                    <Box sx={{display:{xs:"none", lg:"flex"}}}>
                         
                         <ul className="flex gap-5 font-bold">
                            <li>
                                <Link to="/">INICIO</Link>
                            </li>
                            <li>
                                <Link to="/about">SOBRE NOSOTROS</Link>
                            </li>
                            <li>
                                <Link to="/spaces">NUESTROS ESPACIOS</Link>
                            </li>
                            <li>

                                <Scroll to="footer" smooth={true} duration={400}>CONTACTANOS</Scroll>


                            </li>
                         </ul>
                        
                    </Box>

                    <IconButton onClick={ () => setOpen(true) } sx={{display: {xs:"flex", lg:"none"}}}>

                        <MenuIcon sx={{fontSize: 38}} ></MenuIcon>

                    </IconButton>

                </Toolbar>

            </AppBar>       

            {/* ------------------------------------ */}
        
            <Drawer open={open} anchor="right" onClose={ ()=>setOpen(false) } sx={{display: {xs:"flex", lg:"none"}}}>
                
                <NavbarListDrawer  Logo={Logo} Link={Link} Scroll={Scroll} setOpen={setOpen}></NavbarListDrawer>

            </Drawer>

        </>
        
    )

}
