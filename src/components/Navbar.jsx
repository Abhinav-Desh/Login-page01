import React, { useState } from "react";
import '../App.css';
import Pramerica from '../utils/pramerica-logo1.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false); // Start with nav hidden on mobile

    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };

    return (
        <div>
            <div className="Navbar">
                <div className="img-logo">
                    <img src={Pramerica} alt="Pramerica Logo" className="img-logo1" />
                </div>
                <div className={`nav-elements ${isNavVisible ? 'visible' : ''}`}>
                    <div><span style={{ color: "black", textDecoration: "none" }}>Are you New? </span>Sign up</div>
                    <div>
                        <a href="https://pramericalife.in/customer-services" style={{ textDecoration: "none", color: "#0956b5" }} target="_blank" rel="noreferrer">Support</a>
                    </div>
                    <div>English</div>
                </div>
                <div className="toggle-button" onClick={toggleNav}>
                    {isNavVisible ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
