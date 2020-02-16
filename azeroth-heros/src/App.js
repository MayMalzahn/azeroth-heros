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
		 <Routes />
		<Footer />
	  </Router>
	  </div>
  );
}

export default App;

const styles ={
	main:{
		backgroundColor: 'grey',
		height: '100vh',
	}
}
