import React from 'react';
import {NavLink } from "react-router-dom";


const TeamView = props =>{

	var chars = props.val.characters;
	let ports = chars.map((element, i)=>{
										   return <NavLink to='/profile'><img className="porta" onClick = {props.charPage} style={styles.img}  src = {'http://render-us.worldofwarcraft.com/character/'+props.val.characters[i].thumb}></img></NavLink>;
										   })
  return (
	
  		<article style={styles.mini}>
			<h2>{props.val.name}</h2>
	  		<div style={styles.flexRow}>
	  		{ports}
	  		</div>
	  <div style={styles.bttns}>
	  <button style={styles.butn} onClick = {props.del} type="button">Delete</button>
	  <NavLink to='/team' ><button style={styles.butn} onClick = {props.look} type="button">Edit Team</button></NavLink>
		</div>
	  </article>
	 
  )
}

export default TeamView;
const styles ={
		mini:{
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '-5px 5px goldenrod',
		margin: '10px',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '32%',
		textAlign: 'center',
		minWidth: '32%',
		flexWrap: 'wrap',

		
		},
	img:{
		borderRadius: '50%',
	},
	flexRow:{
		display: 'flex',
		flexDirection: 'row',
		
	},
	butn:{
		borderRadius: '25px',
		backgroundColor: 'goldenrod',
		color: 'black',
		width: '25%',
		margin: 'auto',
		fontFamily: 'Fondamento',
	},
	bttns:{		
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: '100%',
	}
		
}