
// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={{ background: "#faedcd", padding: "20px", textAlign: "center" }}>
        <Link to="/" style={{ color: "Black", margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "BLack", margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ color: "Black", margin: "10px" }}>Contact</Link>
    </nav>
);

export default Navbar;
