import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import google from "../utils/download.png";
import img1 from "../utils/random1.png";
import img2 from "../utils/img2.png";
import img3 from "../utils/random3.png";
import bcrypt from 'bcryptjs-react';

const images = [img1, img2, img3];

const Mainpage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const Submitform = (e) => {
        e.preventDefault();
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

      
        console.log("Email:", email);
        console.log("Hashed Password:", hashPass);

        navigate("/agents");
    };

    return (
        <div className="contents">
            <div className="left">
                <div className="slider">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
                </div>
            </div>
            <div className="right">
                <div className="signin-text">
                    <p>Sign In</p>
                </div>
                <div className="mainContent">
                    <form onSubmit={Submitform}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="help">
                            <p>Forget Password?</p>
                            <p>Help</p>
                        </div>
                        <button type="submit">Submit</button>
                        <p className="terms">
                            By signing in, I agree to the <span style={{ color: "#0e72ed" }}>company's privacy statement</span> and <span style={{ color: "#0e72ed" }}>Terms of Service</span>
                        </p>
                        <div className="stay" style={{ marginTop: "15px", fontSize: "12px", display: "flex" }}>
                            <input type="checkbox" />
                            <p style={{ marginLeft: "5px" }}>Stay signed In</p>
                        </div>
                    </form>
                    <div className="others" style={{ marginTop: "20px", paddingTop: "10px" }}>
                        <hr />
                        <div className="social-buttons">
                            <div className="google-button">
                                <img src={google} alt="Google" />
                                <span>Sign in with Google</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainpage;
