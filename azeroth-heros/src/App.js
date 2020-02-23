import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
	  <div style={styles.main}>
	  <Router>
		<Header />
	  	<div style={styles.mid}>
		 <Routes />
	  </div>
		<Footer />
	  </Router>
	  </div>
  );
}

export default App;

const styles ={
	main:{
		fontFamily: 'Simonetta', 
		backgroundColor: 'grey',
		minHeight: '100vh',
	},
	mid:{
		marginTop: '100px',
		marginBottom: '100px',
		
	}
}
