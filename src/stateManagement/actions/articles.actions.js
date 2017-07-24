export default {
	ADD: (article) => {
		return {
			type: 'ADD_ARTICLE',
			payload: article
		}
	},
	FETCH: (articles) => {
		return {
			type: 'FETCH_ARTICLES',
			payload: articles
		}
	}
}