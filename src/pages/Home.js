import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Caraousel from '../components/Caraousel'
import DisplayPage from "../components/DisplayPage";

const Home = () => {

    
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Caraousel></Caraousel>
            </div>
            <div className="m-3">
                <DisplayPage></DisplayPage>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        
        
    );
}

export default Home;


