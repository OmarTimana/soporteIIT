import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'

export default function NavbarListDrawer() {

    return(

        <Box sx={{width:200, bgcolor: 'white'}}>

            <nav>

                <List disablePadding>

                    <ListItem disablePadding>

                    <ListItemButton component="a" href="#simple-list">

                        <ListItemText primary="Item 1" />

                    </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>

                    <ListItemButton component="a" href="#simple-list">

                        <ListItemText primary="Item 2" />
                        
                    </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>

                    <ListItemButton component="a" href="#simple-list">

                        <ListItemText primary="Item 3" />
                        
                    </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>

                    <ListItemButton component="a" href="#simple-list">

                        <ListItemText primary="Item 4" />
                        
                    </ListItemButton>

                    </ListItem>

                </List>

            </nav>

        </Box>
    )

}