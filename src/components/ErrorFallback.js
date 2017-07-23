import React, { Component } from 'react';

class ErrorFallback extends Component {

	// Renders
	render() {
		return (
			<div className="error-fallback">
				<h1>Error 404</h1>
				<p>No se encuentra la ruta especificada</p>
			</div>
		);
	}
}

export default ErrorFallback;