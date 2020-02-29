import React from 'react';
import TeamView from '../components/teamView';
import '../App.css';
var teamsList = [];
class teams extends React.Component{
	
	add = name => {
		if(name !== null && name !== ' '){
	let teamTemp = {'name': name, 'characters': []};
	console.log(teamTemp);
	teamsList.push(teamTemp);
	saveTeams();}
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
			<div style={styles.container}>
		<div style={styles.test}>
			<form style={styles.arts} onSubmit={this.select}>
			<p>
					<label style={styles.pad}>Team Name</label>
					<input style={styles.pad} type="text" name="name" id="name" placeholder="Bosltering/Necrotic" />
				</p>
			<button style={styles.butn}>Add!</button>
			</form>
			<div id='teams' style={styles.arts}>
				{searchList}
			</div>
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
		color: 'white',
		paddingBottom: '10px',
	},
	arts:{
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: '5px',
		paddingRight: '5px',
		flexWrap: 'wrap',
		
	},
	pad:{
		marginRight: '5px',
	},
		butn:{
		borderRadius: '25px',
		backgroundColor: 'goldenrod',
		color: 'black',
		fontFamily: 'Fondamento',
	},
	container:{
		minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	}
}