
import { List, Fab } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';


import { Box } from '@mui/system'

export default function NavbarListDrawer( { Logo, Link, Scroll, setOpen } ) {

    return(

        <Box sx={{ width:250, height:"100%", backgroundColor:"#dddd" }}>

            <nav>

                <List disablePadding>

                    <Box className='-mb-12 flex flex-row flex-1 justify-end '>

                        <Fab color='error' sx={{transform: 'scale(0.6)'}} onClick={ () => setOpen(false) }>
                            
                            <CloseIcon sx={{fontSize: 32}}></CloseIcon>

                        </Fab>
                        
                    </Box>

                    <ul className="flex flex-col mx-3 gap-3 mt-1 font-bold items-start text-stone-700">
                        <li>
                            <Link  onClick={ () => setOpen(false) } to="/">
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link  onClick={ () => setOpen(false) } to="/about">
                                SOBRE NOSOTROS
                            </Link>
                        </li>
                        <li>
                            <Link  onClick={ () => setOpen(false) } to="/spaces">
                                NUESTROS ESPACIOS
                            </Link>
                        </li>
                        <li>

                            <Scroll  onClick={ () => setOpen(false) } to="footer" smooth={true} duration={400}>
                                CONTACTANOS
                            </Scroll>

                        </li>
                    </ul>

                </List>

            </nav>

        </Box>

    )

}