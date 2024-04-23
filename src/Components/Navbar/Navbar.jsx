import { AppBar, Drawer, IconButton, Toolbar, Box } from "@mui/material"

import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

import DownIcon from '@mui/icons-material/KeyboardArrowDown';

import UpIcon from '@mui/icons-material/KeyboardArrowUp';

// --------------------


import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import NavbarListDrawer from "./NavbarDrawer"

import MenuIcon from '@mui/icons-material/Menu';

import { NavLink as Link, Link as Logo } from "react-router-dom"

import {Link as Scroll} from "react-scroll"

import "./style.css";

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const [openS, setOpenS] = useState(false)


    return(

        <>

            <AppBar position="static">

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
                                <Dropdown>
                                    <MenuButton onClick={()=> setOpenS(!openS)} className="flex pb-2">SERVICIOS {openS?<UpIcon/>:<DownIcon/>}</MenuButton>
                                    <Menu className="bg-slate-400 rounded-lg p-3 font-bold text-center text-white">
                                        <MenuItem className="mb-3">
                                            <Link to="/manuals">MANUALES DE INSTALACION</Link>
                                        </MenuItem>
                                        <MenuItem className="mb-3">
                                            <Link to="/s2">SERVICIO 2</Link>
                                        </MenuItem>
                                        <MenuItem className="mb-2">
                                            <Link to="/s3">SERVICIO 3</Link>
                                        </MenuItem>
                                    </Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Link to="/about">SOBRE NOSOTROS</Link>
                            </li>
                            <li>
                                <Link to="/spaces">ESPACIOS FISICOS</Link>
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
