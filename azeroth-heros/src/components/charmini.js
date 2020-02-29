import React from 'react';
import {NavLink } from "react-router-dom";
import '../App.css';
import Popup from 'reactjs-popup';

const CharMini = props =>{
			var teams = JSON.parse(localStorage.getItem('teamsList'));
		var teamNames = 'No teams!';
		if (teams){
			 teamNames = teams.map((element, i) =>{
				return <button type='button' onClick={()=>addToTeam({i})} id={i} className='menu-item'>{element.name}</button>
			})}
			function addToTeam(position){
				if(teams[position.i].characters.length < 5){
				teams[position.i].characters.push(props.val);
				console.log(teams[position.i]);
				localStorage.setItem('teamsList', JSON.stringify(teams));
			}
				else{
					window.alert('This team is full!');
				}
			}
  return (
	
  		<article style={styles.mini}>
			<NavLink to='/profile'><img className="port" onClick = {props.charPage} style={styles.img}  src = {'http://render-us.worldofwarcraft.com/character/'+props.val.thumb}></img></NavLink>
	  		<div style={styles.contn}>
			<h3 className={props.val.clas}>{props.val.name}</h3>
			<h4>{props.val.clas}</h4>
			<p className="">{props.val.realm}</p>
			<p>Level: {props.val.level}</p>
			{props.val.img}
			<p>Achivement Points: {props.val.achiv}</p>
			<p>Honorable Kills: {props.val.hk}</p>
			<button style={styles.butn} onClick = {props.del} type="button">Delete</button>
	  		<div style={styles.noTeam}>
	  		<Popup trigger={<button style={styles.butn} type="button">Add to Team</button>}>{teamNames}</Popup>
	  		</div>
	  		</div>
			</article>
	 
  );
}

export default CharMini;

const styles ={
		mini:{
		borderRadius: '25px',
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '-5px 5px goldenrod',
		margin: '10px',
		padding: '3px',
		maxWidth: '25%',
		
		},
	img: {
		borderRadius: '15px',
	},
	contn:{
		textAlign: 'center',
	},
	butn:{
		borderRadius: '25px',
		backgroundColor: 'goldenrod',
		color: 'black',
		fontFamily: 'Fondamento',
	},
	noTeam:{
		color: 'black',
	}
		
}