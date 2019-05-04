import React, { Component } from 'react';

class ErrorBoundry extends Component {

	constructor(props) {

		super(props);
		this.state = { hasError: false };
	}

	render() {

		if (this.state.hasError) {
			
			return <h1>Oppsie. Something went wrong.</h1>
		}

		return this.props.children;
	}

	componentDidCatch() {

		this.setState({ hasError: true });
	}
};

export default ErrorBoundry;