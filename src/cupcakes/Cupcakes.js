import React, { useState } from 'react';
import "./cupcakes.css";
import { images2 } from './CupcakesData'; 
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Cupcakes() {

	const [currImg, setCurrImg] = useState(0);

    return ( 
	<div className="carousel">
		
		<h2>Cupcakes</h2>
		<center>
			<div className="carouselInner" style={{ backgroundImage: `url(${images2[currImg].img})`}}>
				<div className='left'
				onClick={()=>{
					currImg > 0 && setCurrImg(currImg - 1);
				}}
				><ArrowBackIosIcon/></div>
				<div className='center'></div>
				<div className='right'
				onClick={()=>{
					currImg < images2.length - 1 && setCurrImg(currImg + 1);
				}}
				><ArrowForwardIosIcon/></div>
		</div>	
		</center>
			
		<div className="space"></div>	
	</div>
     );
}
 
export default Cupcakes;