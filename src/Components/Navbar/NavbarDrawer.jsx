import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'

export default function NavbarListDrawer(navLinks) {

    return(

        <Box sx={{width:200, bgcolor: 'white'}}>

            <nav>

                <List disablePadding>

                    {
                        navLinks.map( item => (
                            <ListItem disablePadding key={item.title}>

                            <ListItemButton component="a" href={item.path}>

                                <ListItemText primary={item.title} />

                            </ListItemButton>

                            </ListItem>

                        ))
                    }

                </List>

            </nav>

        </Box>
    )

}