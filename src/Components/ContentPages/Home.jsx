import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import Services from "./Services";
import Spaces from "./Spaces";


export default function Home() {
    return(
        <>
            <Navbar/>

            <Carousel/>

            <About/>

            <Services/>

            <Spaces/>
        
        </>
    )
}