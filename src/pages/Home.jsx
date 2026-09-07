import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinationss";
import Modules from "../components/Modules";
import WhyTravelMate from "../components/WhytravelMate";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Destinations />
            <Modules />
            <WhyTravelMate />
            <Footer />
        </>
    );
}

export default Home;