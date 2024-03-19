import { Box } from "@mui/material";

export default function ItemModal({item}) {

    return(
        <>

        <Box className="flex flex-col items-center">

            <div className="w-96 border-rounded">
                <img loading="lazy" src={item.src} className="h-72 w-auto rounded-lg object-cover -pb-2"/>
            </div>

        </Box>    
        
        </>
    )
}