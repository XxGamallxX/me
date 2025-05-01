import "./LandingPage.css";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Home from "../components/Home";
import WhyToUse from "../components/WhyToUse";
import NavBar from "../components/NavBar";






const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <Home />
      <AboutUs />
      <WhyToUse />
      <Footer/>
    </>
  );
};





export default  LandingPage
