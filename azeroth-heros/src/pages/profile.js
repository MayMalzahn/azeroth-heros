import React from 'react';

var savedChar;

class profile extends React.Component{
	render(){
		loadChars();
		return(
		<article>
			<img src = 'http://render-us.worldofwarcraft.com/character/{savedChar.thumb}'></img>
			<h4>{savedChar.clas}</h4>
			<p>{savedChar.realm}</p>
			<p>Level: {savedChar.level}</p>
				<p>{savedChar.role}</p>
	
			<p>Achivement Points: {savedChar.achiv}</p>
			<p>Honorable Kills: {savedChar.hk}</p>
			<section>
			<p>Talents</p>
			{talents()}
			</section>
			<section>
			<h5><a href="https://worldofwarcraft.com/en-us/character/us/{savedChar.realm}/{savedChar.name}"></a>Official Armory</h5>
			<h5><a href="https://raider.io/characters/us/{savedChar.realm}/{savedChar.name}"></a>Raider.IO</h5>
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
 function talents(){
	 let tal = "";
	 	for(var y = 0 ; y < savedChar.talents[0].talents.length ; y++)
		{
			tal += <img src="https://render-us.worldofwarcraft.com/icons/56/{savedChar.talents[0].talents[y].spell.icon}.jpg"></img> ;
	 	}
	 console.log(tal);
	 return tal;
 }

const styles ={

}

