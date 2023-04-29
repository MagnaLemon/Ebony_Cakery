import React from 'react';
import "./aboutme.css";
import MyLogo from '../images/logo.png';
const AboutMe = () => {
    return ( 
        <div class="content">
			<br/>
        	<div class="space"></div>
			<img className="logo2" src={MyLogo} alt="logo"/>
			<h2>About Us</h2>
			<p>
			Every cake has a texture and flavor story to tell your taste buds.
			From fluffy sponges and silky-smooth cheesecakes to fruity, fudgy, nutty,
			coffee, chocolatey, vanilla and confetti, consider yourself covered. 
			Every cake has a texture and flavor story to tell your taste buds.
			From fluffy sponges and silky-smooth cheesecakes to fruity, fudgy, nutty,
			coffee, chocolatey, vanilla and confetti, consider yourself covered. 
		    </p>
			<div class="space"></div>
        	<br/>	
	    </div>
     );
}
 
export default AboutMe;