
// Contact.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => (
    <div className="page-container" >
        <Navbar />
        <h1>Contact Us</h1>
        <form className="floating-form">
            <label>Name: <input type="text" /></label><br /><br />
            <label>Email: <input type="email" /></label><br /><br />
            <label>Contact: <input type="number" /></label><br /><br />
            <button type="submit">Submit</button>
        </form>
        <Footer />
    </div>
);
export default Contact;
