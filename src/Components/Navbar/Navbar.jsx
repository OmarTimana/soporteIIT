import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material"
import NavbarListDrawer from "./NavbarDrawer"
import { useState } from "react"

import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="static">
                <Toolbar>

                    <IconButton onClick={ () => setOpen(true) }>
                        <MenuIcon></MenuIcon>
                    </IconButton>

                </Toolbar>
            </AppBar>


            {/* ------------------------------------ */}
        
            <Drawer open={open} onClose={ ()=>setOpen(false) }>
                <NavbarListDrawer></NavbarListDrawer>
            </Drawer>
        </>
    )

}