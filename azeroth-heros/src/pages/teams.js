import React from 'react';
import TeamView from '../components/teamView';

var teamsList = [];
class teams extends React.Component{
	
	add = name => {
		if(name !== null && name !== ' '){
	let teamTemp = {'name': name};
	console.log(teamTemp);
	teamsList.push(teamTemp);
	saveTeams();}
	this.forceUpdate();
}
	select = () =>{
		if(document.querySelector('#name').value){this.add(document.querySelector('#name').value)}
	}
	
	delTeam = num => {
	teamsList.splice(num,1);
	console.log(num+'del button pressed');
	saveTeams();
	this.forceUpdate();
}
	savedTeam = num =>{
	localStorage.setItem('savedTeam',JSON.stringify(teamsList[num]));
}
	charPage = num =>{
	localStorage.setItem('profileChar',JSON.stringify(teamsList[num]));
}
	
	render(){
		loadTeams();
		let searchList = teamsList.map((element , i) =>{
			console.log(element);
			return <TeamView key={i} val={element} del={()=>this.delTeam(i)} look={()=>this.savedTeam(i)} />
		})
		
			
		
		return(
		<div style={styles.test}>
			<form>
			<p>
					<label>Team Name</label>
					<input type="text" name="name" id="name" placeholder="Bosltering/Necrotic" />
				</p>
			<button type='button' onClick = {this.select}>Add!</button>
			</form>
			<div id='teams'>
				{searchList}
			</div>
		
		</div>
		)}
	
}
export default teams;

function saveTeams(){
	localStorage.setItem('teamsList',JSON.stringify(teamsList));
}

function loadTeams(){
	if(localStorage.getItem('teamsList')){
		teamsList = JSON.parse(localStorage.getItem('teamsList'));
	}
}

const styles ={
	test:{
		marginTop: '100px',
		color: 'white',
		marginBottom: '100px',
		
	}
}