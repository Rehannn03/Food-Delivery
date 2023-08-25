import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Caraousel from '../components/Caraousel'
const home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Caraousel></Caraousel>
            </div>
            <div className="m-3">
                <Card></Card>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        
        
    );
}

export default home;


