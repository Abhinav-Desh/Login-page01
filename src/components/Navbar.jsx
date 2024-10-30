import React,{useState} from "react";
import '../App.css';
import Pramerica from '../utils/pramerica-logo1.png';



const Navbar = () => {
    const [language, setLanguage] = useState('');
    return (
        <div className="Navbar">
  <div className="img-logo">
    <img src={Pramerica} alt="Pramerica Logo" className="img-logo1" />
  </div>
  <div className="nav-elements">
    <div><span style={{color:"black", textDecoration:"none"}}>Are you New? </span>Sign up</div>
    <div>
      <a href="https://pramericalife.in/customer-services" style={{textDecoration:"none" , color:"#0956b5"}}target="_blank" rel="noreferrer">support</a>
    </div>
    <div>English</div>
  </div>
</div>

    );
}

export default Navbar;
    