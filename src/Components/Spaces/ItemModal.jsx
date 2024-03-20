import { Box } from "@mui/material";

export default function ItemModal({item}) {

    return(
        <>

        <Box className="flex flex-col items-center">

            <div className="border-rounded">
                <img loading="lazy" src={item.src} className="w-screen h-96 rounded-lg object-cover"/>
            </div>

        </Box>    
        
        </>
    )
}