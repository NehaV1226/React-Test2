// Components_Q10/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar3 = () => (
    <nav className="navbar">
        <h3>My Portfolio</h3>
        <div className="nav-links">
            <Link to="/home3">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact3">Contact</Link>
        </div>
    </nav>
);

export default Navbar3;