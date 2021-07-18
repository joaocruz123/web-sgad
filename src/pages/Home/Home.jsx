import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Home(props){
	const {user} = props
	const [value, setValue] = useState(null);
	
	useEffect(() => {
	
	}, []);
	
	return (
		<>
			<h1>Home</h1>
			{user.user_name}
		</>
	);
}

const mapStateToProps = (state) => {
	const { authentication } = state;
	const { user, loading } = authentication;
	return { user, loading };
  }


  export default connect(
	mapStateToProps
  )(withRouter(Home));