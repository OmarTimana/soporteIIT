import CloseIcon from '@mui/icons-material/Close';
import { Fab, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import { Box } from '@mui/system'

export default function NavbarListDrawer( { navLinks } ) {

    const flag = true

    return(

        <Box sx={{ width:250 }}>

            <nav>

                <List disablePadding>

                    {
                        navLinks.map( item => (
                            <ListItem disablePadding key={item.title}>

                                <ListItemButton component="a" href={item.path}>

                                    <IconButton>{item.icon}</IconButton>

                                    <ListItemText>{item.title}</ListItemText>

                                    if (flag) { //terminar esta funcion para que la primera vez solo pinte el FAB
                                        <Fab><CloseIcon></CloseIcon></Fab>
                                    }

                                </ListItemButton>

                                

                            </ListItem>

                        ))
                    }


                </List>

            </nav>

        </Box>

    )

}