import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

import contactIcon from "./Images/phone.svg";
import emailIcon from "./Images/mail.svg";

import CompanyLogo from "./Images/Logo.png"; //Company Logo

function App() {
    const contactNo = "+91 1234567890"; //Company Contact Number
    const email = "info@trucking.com"; // Company Email Address
    return (
        <div className="App">
            <Navbar Logo={CompanyLogo} />
            <Hero
                contactNo={contactNo}
                email={email}
                contactIcon={contactIcon}
                emailIcon={emailIcon}
            />
            <About />
            <Services />
            <Footer
                contactNo={contactNo}
                email={email}
                contactIcon={contactIcon}
                emailIcon={emailIcon}
                Logo={CompanyLogo}
            />
        </div>
    );
}

export default App;
