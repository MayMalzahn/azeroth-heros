import React from 'react';
import {NavLink } from "react-router-dom";
import logo from "../img/logo.jpg";
import thrall from "../img/home-img.png";
import '../App.css';







const Header = props =>{
  return (
	  
	  <header style={styles.head}>
		<img src= {logo} style={styles.headImg1} alt= 'logo'></img>
	  <div style={styles.cent}>
	  <h1>Azeroth Heroes</h1>
	  <div style={styles.nav}>
	  	<button style={styles.button}><NavLink to='/home'>Home</NavLink></button>
	  	<button style={styles.button}><NavLink to='/characters'>Characters</NavLink></button>
	  	<button style={styles.button}><NavLink to='/teams'>Teams</NavLink></button>
	  </div>
	  </div>
	  <img src= {thrall} style={styles.headImg2} alt='thrall'></img>
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
		fontFamily: 'Fredericka the Great', 
		},
	headImg1:{
		maxWidth: '200px',
		maxHeight: '100px',
		
		float: 'left',
	},
	headImg2:{
		maxWidth: '200px',
		maxHeight: '100px',
	
		alignSelf: 'flex-end',
	},
	button:{
		fontFamily:'Cinzel',
		backgroundColor: 'goldenrod',
		color: 'black',
		margin: '3px',
		alignSelf: 'center',
		
	},
	nav: {
		alignSelf:'center',
		marginBottom: '5px',
	},
	cent: {
		display: 'flex',
		flexDirection: 'column',
	}

	
		
}