import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
	// definition
	constructor(props) {
		super(props);
		this.state = {
			title: 'React demo app'
		}
	}

	// lifecycle
	componentWillMount() {
	}

	// Renders
	render() {
		return (
			<header >
				<div className="Header" >
					<h1 className="Header__title">{this.state.title}</h1>
				</div>
				<div className="Header__submenu">
					<h2 className="Header__section"> {this.props.section}</h2>
					<nav>
						{
							this.props.links ? Object.keys(this.props.links).map((link, index) => <a key={index} className="Header__link" href={`#/${link}`}>{link}</a>) : null
						}
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;