import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => (
    <div className="page-container">
        <Navbar/>
        <h1>About Us</h1>
        <p>We provide the best tech solutions.</p>

        <h2>Our Company</h2>
        <img src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?cs=srgb&dl=pexels-ingo-188035.jpg&fm=jpg"
            alt="Company" width="300" height="200" />

        <h2>Our Team</h2>
        <img src="https://img.freepik.com/free-photo/authentic-small-youthful-marketing-agency_23-2150167426.jpg"
            alt="Team" width="300" height="200" />
            <Footer/>
    </div>
);
export default About;
