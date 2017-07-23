import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}
	// lifecycle
	componentWillMount() {
	}

	getLink() {
    return this.props.id ? `#/detail/${this.props.id}` : '#';
	}

	getClass() {
		return this.props.featured ? 'Card Card--featured' : 'Card';
	}

	// Renders
	render() {
		return (
			<a onClick={this.props.onClick} href={ this.getLink() } className={this.getClass()}>
				<div className="Card__front">
					<h1 className="Card__name" dangerouslySetInnerHTML={{ __html: this.props.name }} ></h1>
					<p className="Card__title">{this.props.excerpt}</p>
				</div>
			</a>
		);
	}
}

export default Card;
