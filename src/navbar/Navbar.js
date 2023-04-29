import React from 'react';
import MyLogo from '../images/logo.png';
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="topnav">
            <div className="links">
            <Link to="mailto: meghna.lekshman@gmail.com">Contact</Link>
		    <Link to="/cupcakes">Cupcakes</Link>
		    <Link to="/cakes">Cakes</Link>
		    <Link to="/aboutus">About Us</Link>
		    <Link to="/">Home</Link>
		    <img className="logo1" src={MyLogo} alt="logo"/>
            </div>

        </nav>
    );
}
 
export default Navbar;