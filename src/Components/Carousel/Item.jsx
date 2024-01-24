import { Box } from "@mui/material";

export default function Item({item}) {

    return(
        <>

        <Box className="flex flex-col items-center">

            <h2 className="pb-3">{item.title}</h2>

            <div className="w-full border-rounded">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover pb-3"/>
            </div>

            <p>{item.description}</p>

        </Box>    
        
        </>
    )
}