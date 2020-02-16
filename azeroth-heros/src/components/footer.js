import React from 'react';
const Footer = props =>  {
  return (
   	<footer style={styles.foot}>
		<p>Mayjenta Malzahn 2019</p>
	  	<img src= '../img/Footer-Alagon.jpg' alt='Alagon'></img>
		</footer>
  );
}

export default Footer;

const styles ={
		foot:{
		bottom: 0,
		position: 'absolute',
		height: '100px',
		width: '100%',
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '2px -2px goldenrod',
		color: 'white',
		}
		
}