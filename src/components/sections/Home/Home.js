import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card/Card';
import LightboxActions from '../../../stateManagement/actions/lightbox.actions';
import { fetchArticles } from './../../../stateManagement/thunks/Articles.thunks';
import './Home.css';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			articles: props.articles
		}
	}

	// lifecycle
	componentWillMount() {
		let { fetchArticles } = this.props;

		if (this.props.articles.length === 0) {
			fetchArticles();
		}
	}

	// Renders
	render() {
		return (
			<section className="List">
				{this.props.articles.map((el, index) => {
					return <Card key={index} id={el.id} name={el.author} excerpt={el.excerpt}></Card>
				})}
				<Card featured="true" onClick={(ev) => { this.props.toggleLightbox(); }} name="Create new"></Card>
			</section>
		);
	}
}

let mapStateToProps = state => ({
	articles: state.articles
});

let mapDispatchToProps = dispatch => ({
	fetchArticles: (articles) => { dispatch(fetchArticles()); },
	toggleLightbox: () => { dispatch(LightboxActions.TOGGLE()); }
});

export default connect(
	mapStateToProps, mapDispatchToProps
)(Home)
