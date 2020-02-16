import React from 'react';
import $ from 'jquery';
import CharMini from '../components/charMini';



var charList = [];
class characters extends React.Component{
	
	delChar = num => {
	charList.splice(num,1);
	console.log(num+'del button pressed');
	saveChars();
	this.forceUpdate();
}
	find = () =>{
	var name = document.getElementById('name');
	var realm = document.getElementById('realm');
	if(!(charValidate(name.value,realm.value,charList))){
	getTalents(name.value,realm.value);
	}
	
}
	charPage = num =>{
	localStorage.setItem('profileChar',JSON.stringify(charList[num]));
}	
	
	render(){
		loadChars();
		console.log(charList);
		
		let searchList = charList.map((element , i) =>{
			return <CharMini key={i} val={element} del={()=>this.delChar(i)} charPage={()=>this.charPage(i)}/>
		})
		
		return(
		<div style={styles.test}>
			<form style={styles.arts}>
				<p>
					<label>Character Name</label>
					<input type="text" name="name" id="name" placeholder="Maethrya" />
				</p>
				<p>
					<label>Realm</label>
					<input type="text" name="realm" id="realm" placeholder="Greymane" />
				</p>
			<button type='button' onClick = {this.find} >Find!</button>
			</form>
			<div id='charArea' style={styles.arts}>
			{searchList}
			</div>
			
		</div>
		)
	}
}
export default characters;

var id = "de8df8220aba46f794d661d7683ed707";
var secret = "CSh9ZdAIQdI5Df9yVC99k7SYQG08oIH8";
var grant = {grant_type: "client_credentials",
			client_id: id,
			client_secret: grant};
var token = JSON.parse(getToken());

	
	function getToken(){
	//getting the access token using my client id and secret. This is required to pull anything from my chosen api
	var result = $.ajax({
		type: 'POST',
		url: 'https://us.battle.net/oauth/token',
		data:{"grant_type":"client_credentials"},
		beforeSend: function(request)
		{	//sends the id and secret to log in
			request.setRequestHeader("Authorization","Basic "+btoa(id+":"+secret));
		},
		headers: {//makes the grant_type work. Ill admit I am not sure why
				'Content-Type': 'application/x-www-form-urlencoded',
				 "accepts": "application/json",
				'Access-Control-Allow-Headers' : 'x-requested-with'},
		body: grant,
		async:false,
		success:function(data)
		{}
    
	}).responseText;
		//returns results for storage in token
		return result;
	}

function getTalents(name,realm){

		fetch('https://us.api.blizzard.com/wow/character/'+realm+'/'+name+'?fields=talents&locale=en_US&access_token='+token["access_token"])
	.then(function(response){
		  if(!response.ok){
			  //unfortunately, the api only returns "not found", not if the realm or character is the problem.
			window.alert("Character or Realm "+response.statusText);
			  return;
		}
			return response;
		  }
		 )
		.then((resp)=> resp.json())
		.then(function (data)
		{
			let name = data.name;
			let realm = data.realm;
			let clas = data.class;
			let level = data.level;
			let achiv = data.achievementPoints;
			let thumb = data.thumbnail;
			let hk = data.totalHonorableKills;
			let talents = data.talents;
			let role = data.talents[0].spec.role;
			let fac = data.faction;
			let temp = new Toon(name,realm,clas,level,achiv,thumb,hk,talents,role,fac);
			charList.push(temp);
			saveChars();
			console.log(data);
		
		})

		.catch(function (error)
		{
			console.log(error);
		})
	console.log(charList);
}

class Toon{
	constructor(name,realm,cla,level,achiv,thumb,hk,talents,rol,fac){
		this.name = name;
		this.realm = realm;
		if(cla === 1){
			this.clas = 'Warrior';
		}
		if(cla === 2){
			this.clas = 'Paladin';
		}
		if(cla === 3){
			this.clas = 'Hunter';
		}
		if(cla === 4){
			this.clas = 'Rogue';
		}
		if(cla === 5){
			this.clas = 'Priest';
		}
		if(cla === 6){
			this.clas = 'Death Knight';
		}
		if(cla === 7){
			this.clas = 'Shaman';
		}
		if(cla === 8){
			this.clas = 'Mage';
		}
		if(cla === 9){
			this.clas = 'Warlock';
		}
		if(cla === 10){
			this.clas = 'Monk';
		}
		if(cla === 11){
			this.clas = 'Druid';
		}
		if(cla === 12){
			this.clas = 'Demon Hunter';
		}
		
		this.level = level;
		this.achiv = achiv;
		this.thumb = thumb;
		this.hk = hk;
		this.talents = talents;
		if(rol === "HEALING"){
			this.role = '<img src="img/heal.png" alt="Healing Symbol">';
		}
		if(rol === "TANK"){
			this.role = '<img src="img/tank.png" alt="Tanking Symbol">';
		}
		if(rol === "DPS"){
			this.role = '<img src="img/dps.png" alt="DPS Symbol">';
		}
		this.fac = fac;
	}
}





function saveChars(){
	localStorage.setItem('charList',JSON.stringify(charList));
}


		
function loadChars(){
	if(localStorage.getItem('charList')){
		charList = JSON.parse(localStorage.getItem('charList'));
	}
}

function charValidate(nam,realm,arr){
	console.log(nam);
	let nam2 = nam.charAt(0).toUpperCase()+nam.slice(1);
	let realm2 = realm.charAt(0).toUpperCase()+realm.slice(1);
	if(arr !== undefined && arr.length > 0){
	for(let y = 0; y < arr.length; y++){
		if(nam2 === arr[y].name && realm2 === arr[y].realm){
			return true;
		}
		else{
			continue;
		}
	}
	return false;}
	else{return false;}
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
	}
}