import React from 'react';
class footer extends React.Component  {
  return (
   	<footer style={styles.foot}>
		<p>Mayjenta Malzahn 2019</p>
		</footer>
  );
}

export default footer;

const styles ={
		foot:{
		bottom: 0,
		position: 'absolute',
		height: '100px',
		width: '100%',
		backgroundColor: 'rgb(241, 179, 255)',
		boxShadow: '2px -2px grey',
		}
		
}