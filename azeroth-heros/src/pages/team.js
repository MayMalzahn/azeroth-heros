import React from 'react';
import CharMini from '../components/charMini';
import {NavLink } from "react-router-dom";


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
	add =()=> {
		console.log('add pressed');
		var chars = JSON.parse(localStorage.getItem('charList'));
		var temps = document.getElementById('chararea');
		let searchList2 = chars.map((element , e) =>{
			var temp = '';
			temp += "<article>";
			temp += "<NavLink to='/profile'><img className='port' onClick ={this.charPage("+e+")}  src = 'http://render-us.worldofwarcraft.com/character/"+chars[e].thumb+"'></img></NavLink>";
			temp += "<h2>"+chars[e].name+"</h2>";
			temp += "<h2>"+chars[e].realm+"</h2>";
			temp += "</article>";
			temp += "<button type='button' onClick ={this.addToTeam("+e+")}>Add To Team</button>";
			return temp;
		})
		if(temps){
		temps.innerHTML = searchList2;
	}}
	
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
		<button type='button' onClick = {this.add}>Add Character</button>
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