import Aboutus from "../Components/Aboutus";
import Contactus from "../Components/Contactus";
import Dservices from "../Components/Dservices";
import Footer from "../Components/Footer";
import Iservices from "../Components/Iservices";
import Navbar from "../Components/Navbar";
import Priceplan from "../Components/Priceplan";
import Special from "../Components/Special";


function Home() {
    return ( 
        <div>
            <Navbar/>
            <Aboutus/>
            <Priceplan/>
            <Dservices/>
            <Iservices/>
            <Special/>
            <Contactus/>
           
            <Footer/>
            
        </div>
     );
}

export default Home;