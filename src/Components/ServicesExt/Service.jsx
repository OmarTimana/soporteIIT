import { Grid, Button } from "@mui/material";
import { NavLink as Link } from "react-router-dom";


export default function Service({service}) {

    return(
        <>
            <Grid className="w-1/4 bg-neutral-400 flex justify-center mt-3 p-4">
                <Button color="primary" className="flex flex-col gap-4" component={Link} target="_blank" to={service.url}>
                    <img src={service.image} alt="" width={65} />
                    {service.title}
                </Button>
            </Grid>
        </>
    )
}