import React from 'react';
import CharMini from '../components/charMini';
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
		let searchList = 'There is no one on this team!';
		console.log(savedTeam.values);
		if(savedTeam !== null && savedTeam !== undefined && savedTeam !== [] && savedTeam.length > 1){
		let searchList = savedTeam.values.map((element , i) =>{
			return <CharMini key={i} val={element} del={()=>this.delChar(i)} charPage={()=>this.charPage(i)}/>
		})}

		
		return(
		<div>
		<div style={styles.test}>
			<h1>{savedTeam.name}</h1>
		{searchList}
		<NavLink to='/teams'><button type='button' onClick = {()=>this.delTeam(savedTeam.name)}>Delete Team</button></NavLink>
		</div>
		<div id='chararea'>
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
	}
}