import { Box } from "@mui/material";

export default function Item({item}) {

    return(
        <>

        <Box className="flex flex-col items-center">

            <h2 className="pb-2 font-bold text-xl uppercase">{item.title}</h2>

            <div className="w-full border-rounded">
                <img loading="lazy" src={item.image} alt={item.title} className="h-72 w-full rounded-lg object-cover -pb-2"/>
            </div>

            {/* <p>{item.description}</p> */}

        </Box>    
        
        </>
    )
}