import React from 'react';
import {NavLink } from "react-router-dom";


const CharMini = props =>{
			
  return (
	
  		<article style={styles.mini}>
			<NavLink to='/profile'><img className="port" onClick = {props.charPage}  src = {'http://render-us.worldofwarcraft.com/character/'+props.val.thumb}></img></NavLink>
			<h3 className="">{props.val.name}</h3>
			<h4>{props.val.clas}</h4>
			<p className="">{props.val.realm}</p>
			<p>Level: {props.val.level}</p>
			{props.val.img}
			<p>Achivement Points: {props.val.achiv}</p>
			<p>Honorable Kills: {props.val.hk}</p>
			<button onClick = {props.del} type="button">Delete</button>
			</article>
	 
  );
}

export default CharMini;

const styles ={
		mini:{
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '-5px 5px goldenrod',
		margin: '10px',
		}
		
}