import React from 'react';
import '../App.css';
import $ from 'jquery';

//I attempted to get the img with a series of fetch statements (token => affix id using token => affix media link using id). That became an absolute, non-functional mess, so I just hardcoded the media links.
class home extends React.Component{
	 
	render(){
						 
		return(
		<div style={styles.test}>
		<h2 style={styles.head}>Welcome to the Azeroth Heroes home page!</h2>
		<h3>This week in M+...</h3>
		<img style={styles.aff} src="https://render-us.worldofwarcraft.com/icons/56/ability_toughness.jpg"></img>
		<h2 style={styles.fort}>FORTIFIED</h2>
			<p>Trash is gonna be rough. Go AOE spec DPS!</p>
			<img style={styles.aff} src="https://render-us.worldofwarcraft.com/icons/56/ability_ironmaidens_whirlofblood.jpg"></img>
		<h2 style={styles.burst}>BURSTING</h2>
			<p>OW OW OW. Try not to let this stack, or your healer will cry, and you will die.</p>
			<img style={styles.aff} src="https://render-us.worldofwarcraft.com/icons/56/spell_shaman_lavasurge.jpg"></img>
		<h2 style={styles.vol}>VOLCANIC</h2>
			<p>Watch your feet!</p>
			<img style={styles.aff} src="https://render-us.worldofwarcraft.com/icons/56/trade_archaeology_nerubian_obelisk.jpg"></img>
		<h2 style={styles.awak}>AWAKENED</h2>
			<p>Know the pillars. Love the pillers. Skip the trash with the pillars.</p>
		</div>
		)
	}
}
export default home;


const styles ={
	test:{
		fontFamily: 'Fondamento', 
		color: 'rgb(255, 204, 204)',
		textAlign: 'center',
	},
	head:{
		fontSize:'3em',
		color: 'goldenrod',
		 textShadow: '2px -2px #cc9900',},
	fort:{color:'skyblue',
		  fontSize:'2em',
		 textShadow: '2px -2px #330099',},
	burst:{color:'darkred',
		   fontSize:'2em',
		  textShadow: '2px -2px #c7475d',},
	vol:{color:'orange',
		 fontSize:'2em',
		textShadow: '2px -2px #EE7600',},
	awak:{color:'rgb(90,235,173)',
		  fontSize:'2em',
		 textShadow: '2px -2px #333300',},
	aff:{
	borderRadius: '50%',
	width: '100px',
	marginTop: '100px',
	border: 'solid thick black'
}
}