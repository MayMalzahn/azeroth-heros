import React from 'react';
import {NavLink } from "react-router-dom";


const TeamView = props =>{

  return (
	
  		<article style={styles.mini}>
			<h2>{props.val.name}</h2>
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
		}
		
}