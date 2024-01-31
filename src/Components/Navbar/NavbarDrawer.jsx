import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, ListItem, ListItemButton, ListItemText, Fab } from '@mui/material'

import { Box } from '@mui/system'

export default function NavbarListDrawer( { navLinks, Link, setOpen } ) {

    return(

        <Box sx={{ width:250 }}>

            <nav>

                <List disablePadding>

                <Box className='-mb-12 flex flex-row flex-1 justify-end '>

                    <Fab color='error' sx={{transform: 'scale(0.6)'}} onClick={ () => setOpen(false) }>
                        
                        <CloseIcon sx={{fontSize: 32}}></CloseIcon>

                    </Fab>
                    
                </Box>

                    {
                        navLinks.map( item => (

                            <ListItem disablePadding key={item.title}>

                                <ListItemButton component={Link} to={item.path} smooth='true' onClick={ () => setOpen(false) }>

                                    <IconButton>{item.icon}</IconButton>

                                    <ListItemText>{item.title}</ListItemText>

                                </ListItemButton>

                            </ListItem>

                        ))
                    }

                </List>

            </nav>

        </Box>

    )

}