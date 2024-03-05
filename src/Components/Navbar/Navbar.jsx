import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"

import { useState } from "react"

import iitLogo from '/logo_SIIT.png'

import NavbarListDrawer from "./NavbarDrawer"

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutIcon from '@mui/icons-material/Groups2';
import SpacesIcon from '@mui/icons-material/Apartment';

// import { NavHashLink as Link } from "react-router-hash-link";

import { Link } from "react-scroll"

const navLinks = [
    {title: "Inicio", path: "top", icon: <HomeIcon></HomeIcon>},
    {title: "Sobre Nosotros", path: "about", icon: <AboutIcon></AboutIcon>},
    {title: "Nuestros Espacios", path: "spaces", icon: <SpacesIcon></SpacesIcon>},
    {title: "Contactanos", path: "footer", icon: <ServicesIcon></ServicesIcon>}

]


export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(

        <>

            <AppBar position="sticky" className="">

                <Toolbar>

                    <Button>

                        <img src={iitLogo} alt="Logo_Soporte" width={260} />

                    </Button>

                    <Typography sx={{flexGrow:1}}></Typography>

                    <Box sx={{display:{xs:"none", lg:"flex"}}}>

                        <ul className="flex flex-1 gap-4">

                            <li>
                                <Link activeClass="active" to="top" spy={true} smooth={true} offset={-114.5} duration={400} activeStyle={{fontWeight: "bold", paddingBottom: "8px", borderBottom: "solid white 3px"}}>INICIO</Link>
                            </li>


                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-113.5} duration={400} activeStyle={{fontWeight: "bold", paddingBottom: "8px", borderBottom: "solid white 3px"}}>SOBRE NOSOTROS</Link>
                            </li>

                            <li>
                                <Link to="spaces" spy={true} smooth={true} offset={-113.5} duration={400} activeStyle={{fontWeight: "bold", paddingBottom: "8px", borderBottom: "solid white 3px"}}>NUESTROS ESPACIOS</Link>
                            </li>

                            <li className="xl:2xl:hidden">
                                <Link to="footer" spy={true} smooth={true} offset={-426.5} duration={400} activeStyle={{fontWeight: "bold", paddingBottom: "8px", borderBottom: "solid white 3px"}}>CONTACTANOS</Link>
                            </li>

                            <li className="hidden 2xl:xl:block">
                                <Link to="footer" spy={true} smooth={true} offset={-838.5} duration={400} activeStyle={{fontWeight: "bold", paddingBottom: "8px", borderBottom: "solid white 3px"}}>CONTACTANOS</Link>
                            </li>

                        </ul>

                    {/* <NavHashLink
                        to="#about"
                        smooth={true}
                        style={
                        isActive("#about")
                            ? {
                                textDecoration: "solid underline purple 4px"
                            }
                            : {}
                        }
                        activeStyle={{
                        fontWeight: "bold",
                        textDecoration: "solid underline purple 4px"
                        }}
                    >
                        SOBRE NOSOTROS
                    </NavHashLink>
                    
                    <NavHashLink
                        to="#services"
                        style={
                        isActive("#services")
                            ? {
                                textDecoration: "solid underline purple 4px"
                            }
                            : {}
                        }
                    >
                        SERVICIOS
                    </NavHashLink> */}


                        {/* {
                            navLinks.map( item => (

                                <Button color="inherit" variant="h5" component={Link} to={item.path} key={item.title} smooth='true'>{item.title}</Button>
                            
                            ))
                        } */}
                       
                    </Box>

                    <IconButton onClick={ () => setOpen(true) } sx={{display: {xs:"flex", lg:"none"}}}>

                        <MenuIcon sx={{fontSize: 38}} ></MenuIcon>

                    </IconButton>

                </Toolbar>

            </AppBar>       

            {/* ------------------------------------ */}
        
            <Drawer open={open} anchor="right" onClose={ ()=>setOpen(false) } sx={{display: {xs:"flex", lg:"none"}}}>
                
                <NavbarListDrawer  navLinks={navLinks} Link={Link} setOpen={setOpen}></NavbarListDrawer>

            </Drawer>

        </>
        
    )

}
