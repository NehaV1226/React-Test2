
// Home.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => (
    <div className="page-container">
        <Navbar />
        <h1>Welcome! Neha Vishwakarma</h1>
        <p>Explore our latest features:</p>
        <ul>
            <li>Smartphones - Latest models with AI cameras.</li>
            <li>Laptops - High-performance for work & gaming.</li>
            <li>Wearables - Smartwatches & fitness trackers.</li>
        </ul>
        <Footer/>
    </div>
);
export default Home;