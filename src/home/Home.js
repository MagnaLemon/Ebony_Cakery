import React, { useState } from 'react';
import "./home.css";
import MyLogo from '../images/logo.png';
const Home = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div class="content">
			<br/>
			<img className="logo4" src={MyLogo} alt="logo"/>
            <form>
			    <h2>Email:</h2>
                <input type='email' name='email' placeholder='email...' required onChange/>
			    <h2>Password:</h2>
                <input type='password' name='pass' placeholder='password...' required onChange/>
                <br/>
                <button onSubmit>Log In</button>
            </form>
			<div class="space"></div>
        	<br/>	
	    </div>
     );
}
 
export default Home;