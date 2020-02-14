import React from 'react';
class header extends React.Component {
  return (
   	<header style={styles.head}>
		<p>Mayjenta Malzahn 2019</p>
		</header>
  );
}

export default header;

const styles ={
		head:{
		top: 0,
		position: 'absolute',
		height: '100px',
		width: '100%',
		backgroundColor: 'rgb(241, 179, 255)',
		boxShadow: '2px -2px grey',
		}
		
}