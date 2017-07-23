import React, { Component } from 'react';
import Card from './Card/Card';
import request from './../../../request';
import { ARTICLES_QUERY } from './../../../queries';
import { connect } from 'react-redux';
import ArticleActions from '../../../stateManagement/actions/articles.actions';
import LightboxActions from '../../../stateManagement/actions/lightbox.actions';
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
			request(ARTICLES_QUERY.All).then(response => {
				fetchArticles(response.data.articles);
			});
		}
	}

	// Renders
	render() {
		return (
			<section className="List">
				{this.props.articles.map((el, index) => <Card id={el.id} name={el.author} excerpt={el.excerpt}></Card>)}
				<Card featured="true" onClick={(ev) => { this.props.toggleLightbox(); }} name="Create new"></Card>
			</section>
		);
	}
}

let mapStateToProps = state => ({
	articles: state.articles
});

let mapDispatchToProps = dispatch => ({
	fetchArticles: (articles) => { dispatch({ type: ArticleActions.FETCH, payload: articles }) },
  toggleLightbox: () => { dispatch({ type: LightboxActions.TOGGLE }) }
});

export default connect(
	mapStateToProps, mapDispatchToProps
)(Home)
