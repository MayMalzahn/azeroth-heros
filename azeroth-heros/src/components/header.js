import React from 'react';
import {NavLink } from "react-router-dom";


const Header = props =>{
  return (
   	<header style={styles.head}>
		<img src= '../img/logo.jpg' alt= 'logo'></img>
	  <h1>Azeroth Heros</h1>
	  <div>
	  	<button><NavLink to='/home'>Home</NavLink></button>
	  	<button><NavLink to='/characters'>Characters</NavLink></button>
	  	<button><NavLink to='/teams'>Teams</NavLink></button>
	  </div>
	  <img src= '../img/home-img.png' alt='thrall'></img>
	</header>
  );
}

export default Header;

const styles ={
		head:{
		top: 0,
		position: 'absolute',
		height: '100px',
		width: '100%',
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '-2px 2px goldenrod',
		color: 'rgb(192,192,192)',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: '5px',
		paddingRight: '5px',
		}
		
}