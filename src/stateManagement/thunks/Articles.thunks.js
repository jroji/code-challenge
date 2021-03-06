import ArticleActions from './../actions/articles.actions';

import { ARTICLES_QUERY } from './../../queries';
import { ARTICLES_MUTATION } from './../../queries';

import request from './../../request';

export function fetchArticles(redirect = false) {
	return (dispatch) => {
		request(ARTICLES_QUERY.All).then(response => {
			dispatch(ArticleActions.FETCH(response.data.articles));
			if(redirect) { window.location = '/#'; }
			return response;
		});
	};
}

export function addArticle(article) {
	return (dispatch) => {
		request(ARTICLES_MUTATION.Add(article)).then(response => {
      dispatch(ArticleActions.ADD(article));
      return request(ARTICLES_QUERY.All).then(response => {
        dispatch(ArticleActions.FETCH(response.data.articles));
      });
		});
	};
};