import React from 'react';
import CharMini from '../components/charmini';
import {NavLink } from "react-router-dom";
import '../App.css';

var savedTeam = [];
class team extends React.Component{
	
	
	delChar = num => {
	savedTeam.splice(num,1);
	console.log(num+'del button pressed');
	saveTeams();
	this.forceUpdate();
}

	charPage = num =>{
	localStorage.setItem('profileChar',JSON.stringify(savedTeam[num]));
}
	delTeam = nam =>{
		var temp = JSON.parse(localStorage.getItem('teamsList'));
		for(var i = 0; i< temp.length; i++){
			if(temp[i].name === nam){
				temp.splice(i , 1);
			}
		}
		localStorage.setItem('teamsList',JSON.stringify(temp));
	}
	
	
		addToTeam = a =>{
		console.log('button worked');
		if(savedTeam.length <= 5){
		console.log('added');
		var chars = JSON.parse(localStorage.getItem('charList'));
		savedTeam.push(chars[a]);
		saveTeams();
		this.forceUpdate();}
		else{
			window.alert('There are already 5 memebers on this team!');
		}
	}
	

	
	
	render(){
		loadChars();
	
		console.log(savedTeam);
		let searchList = savedTeam.characters.map((element , i) =>{
			return <CharMini key={i} val={element} del={()=>this.delChar(i)} charPage={()=>this.charPage(i)}/>
		})
		if(savedTeam === undefined || savedTeam.characters.length < 1){
				let searchList = 'There is no one on this team!';
		}

		
		return(
		<div>
		<div style={styles.test}>
			<h1>{savedTeam.name}</h1>
		<NavLink to='/teams'><button type='button' style={styles.butn} onClick = {()=>this.delTeam(savedTeam.name)}>Delete Team</button></NavLink>
		<div style ={styles.arts}>
		{searchList}
		</div>										  
		</div>
		</div>
		)
	}
}
export default team;

function loadChars(){
	if(localStorage.getItem('savedTeam')){
		savedTeam = JSON.parse(localStorage.getItem('savedTeam'));
	}
}
function saveTeams(){
	localStorage.setItem('savedTeam',JSON.stringify(savedTeam));
}
const styles ={
	test:{
		marginTop: '100px',
		color: 'white',
		marginBottom: '100px',
	},
	arts:{
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: '5px',
		paddingRight: '5px',
	},
		butn:{
		borderRadius: '25px',
		backgroundColor: 'goldenrod',
		color: 'black',
		width: '25%',
		margin: 'auto',
		fontFamily: 'Fondamento',
	},
}