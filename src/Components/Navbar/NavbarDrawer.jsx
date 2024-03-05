import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, Fab, Typography } from '@mui/material'

import { Box } from '@mui/system'

export default function NavbarListDrawer( { navLinks, Link, setOpen } ) {

    return(

        <Box sx={{ width:250, height:"100%", backgroundColor:"#dddd" }}>

            <nav>

                <List disablePadding>

                <Box className='-mb-12 flex flex-row flex-1 justify-end '>

                    <Fab color='error' sx={{transform: 'scale(0.6)'}} onClick={ () => setOpen(false) }>
                        
                        <CloseIcon sx={{fontSize: 32}}></CloseIcon>

                    </Fab>
                    
                </Box>

                    {
                        navLinks.map( item => (

                            // <ListItem disablePadding key={item.title}>

                            //     <ListItemButton component={Link} to={item.path} onClick={ () => setOpen(false) }>

                            //         <IconButton>{item.icon}</IconButton>

                            //         <ListItemText>{item.title}</ListItemText>

                            //     </ListItemButton>

                            // </ListItem>

                            <ul key={item.title}>
                                <li>
                                    <Link onClick={ () => setOpen(false) } to={item.path} spy={true} smooth={true} offset={-113.5} duration={400} activeStyle={{borderBottom: "solid gray 2px", borderTop: "solid gray 2px"}} className="flex flex-row items-center text-stone-700">
                                        <IconButton>{item.icon}</IconButton>
                                        <Typography variant="h6" fontWeight="bold">
                                        {item.title}
                                        </Typography>
                                    </Link>
                                </li>

                            </ul>

                        ))
                    }

                </List>

            </nav>

        </Box>

    )

}