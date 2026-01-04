// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./common/header1";
import Header2 from "./common/header2";
import Navbar from "./common/navbar";
import Footer from "./common/footer";

import Home from "./pages/Home/home";
import EVMain from "./EV/EVMain";
import TataAce from "./TataAce/TataAce";
import Tataintra from "./Tataintra/Tataintra";
import Tatayodha from "./Yodha/Tatayodha";
import Tatapickup from "./Pickup/Tatapickup";
import Tataservice from "./Tataservice/Tataservice";
import ContactUs from "./components/contact/ContactUs";
import AutoExpo from "./components/AUTOEXPO/AutoExpo";
import Betteralways from "./Betteralways/Betteralways";

import Knowmore from "./Knowmorebtnpage/KnowmoreDetail";




// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <Header1 />
            <Header2 />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ev" element={<EVMain />} />
                <Route path="/tata-ace" element={<TataAce />} />
                {/* <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} /> */}
                {/* more routes */}
                <Route path="/tata-pickup" element={<Tatapickup/>} />
                <Route path="/tata-yodha" element={<Tatayodha/>} />
                <Route path="/tata-service" element={<Tataservice/>} />
                <Route path="/tata-intra" element={<Tataintra/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                <Route path="/better-always" element={<Betteralways/>}/>
               
               
                <Route path="/autoexpo" element={<AutoExpo/>}/>
                {/* <Route path="/Knowmorebtn2" element={<Knowmorebtn2/>}/> */}
                <Route path="/knowmore/:title" element={<Knowmore/>}/>
            </Routes>

            <Footer />
            
        </Router>
    );
}
