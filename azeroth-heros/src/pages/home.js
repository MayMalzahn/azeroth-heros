import React from 'react';


class home extends React.Component{
	render(){
		return(
		<div style={styles.test}>
		<h2>Welcome to the Azeroth Heros home page!</h2>
		<h3>This week in M+...</h3>
		</div>
		)
	}
}
export default home;
const styles ={
	test:{
		marginTop: '100px',
		color: 'white',
		marginBottom: '100px',
	}
}