import React from 'react';
import {NavLink } from "react-router-dom";


const TeamView = props =>{

	var chars = props.val.characters;
	let ports = chars.map((element, i)=>{
										   return <NavLink to='/profile'><img className="port" onClick = {props.charPage} style={styles.img}  src = {'http://render-us.worldofwarcraft.com/character/'+props.val.characters[i].thumb}></img></NavLink>;
										   })
  return (
	
  		<article style={styles.mini}>
			<h2>{props.val.name}</h2>
	  		{ports}
	  <button onClick = {props.del} type="button">Delete</button>
	  <NavLink to='/team'><button onClick = {props.look} type="button">Edit Team</button></NavLink>
		</article>
	 
  )
}

export default TeamView;
const styles ={
		mini:{
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '-5px 5px goldenrod',
		margin: '10px',
		},
	img:{
		borderRadius: '50%',
	}
		
}