import React from 'react';
import '../App.css';
import heal from '../img/heal.png';
import tank from '../img/tank.png';
import dps from '../img/dps.png';
var savedChar;

class profile extends React.Component{
	render(){
		loadChars();
	   let talents = savedChar.talents[0].talents.map((element, i) =>{
			return <img style={styles.tal} src={"https://render-us.worldofwarcraft.com/icons/56/"+savedChar.talents[0].talents[i].spell.icon+".jpg"}></img> ;
	   	})
	   
		console.log(savedChar.role);
		return(
		<article style={styles.art}>
			<img style={styles.img} src = {'http://render-us.worldofwarcraft.com/character/'+savedChar.thumb}></img>
			<h3 className={savedChar.clas}>{savedChar.name}</h3>
			<h4>{savedChar.clas}</h4>
			<p>{savedChar.realm}</p>
			<p>Level: {savedChar.level}</p>
				<p><img src={'../img/'+savedChar.role}></img></p>
	
			<p>Achivement Points: {savedChar.achiv}</p>
			<p>Honorable Kills: {savedChar.hk}</p>
			<section>
			{talents}
			</section>
			<section>
			<h5 ><a className='links' href={"https://worldofwarcraft.com/en-us/character/us/"+savedChar.realm+"/"+savedChar.name}>Official Armory</a></h5>
			<h5><a className='links' href={"https://raider.io/characters/us/"+savedChar.realm+"/"+savedChar.name}>Raider.IO</a></h5>
			</section>
			</article>
		)
	}
}
export default profile;

function loadChars(){
	if(localStorage.getItem("profileChar")){
		savedChar = JSON.parse(localStorage.getItem("profileChar"));
	}
}


const styles ={
	art:{
		borderRadius: '25px',
		textAlign: 'center',
		backgroundColor: 'black',
		color: 'white',
		width: '45%',
		margin: 'auto',
		marginTop: '25px',

	},
	img: {
		borderRadius: '15px',
	},
	tal:{
		borderRadius: '50%'
	},
}

