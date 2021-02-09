
import React, { Component } from 'react';
export default class Loading extends Component {
	componentDidMount() {
		const isLoggedIn = false;
		this.props.navigation.navigate(isLoggedIn ? "Meal" : "Home");
	}

	render() {
		return <Text>Loading screen</Text>;
	}
}