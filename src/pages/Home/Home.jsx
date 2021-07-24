import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Home(props) {
	const { user } = props

	useEffect(() => {

	}, []);

	return (
		<>
			<h1>Home</h1>
			{user && user.user_name}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.authentication.user
	};
}


export default connect(
	mapStateToProps
)(withRouter(Home));