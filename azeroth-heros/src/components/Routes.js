import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from '../pages/home';
import profile from '../pages/profile';
import team from '../pages/team';
import teams from '../pages/teams';
import characters from '../pages/characters';

class Routes extends React.Component {
	render(){
		return (
		<Switch style={styles.pad}>
			<Route exact path="/" component={home} />
			<Route exact path="/home" component={home} />
			<Route exact path="/profile" component={profile} />
			<Route exact path="/team" component={team} />
			<Route exact path="/teams" component={teams} />
			<Route exact path="/characters" component={characters} />
		</Switch>
		);
	}
}
export default Routes;

const styles ={
	pad:{
		
	}
}