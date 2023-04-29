import React from 'react';
import MyLogo from '../images/logo.png';
import "./bottomnav.css";

const BottomNav = () => {
    return ( 
        <footer>
	        <p>2022 | Ebony Cakery</p>
	        <br/>
	        <img className="logo3" src={MyLogo} alt="logo"/>
	        <br/>
	        <br/>
	        <nav>
		        <a href="#top">Jump to Top</a>|
		        <a href="mailto: meghna.lekshman@gmail.com">Contact Us</a>
	        </nav>
        </footer>
    );
}
 
export default BottomNav;