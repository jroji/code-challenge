import ArticlesActions from '../actions/articles.actions';

export default function articles(state = [], action) {
	switch (action.type) {
		/**
		 * Add one user to the list
		 */
		case ArticlesActions.ADD:
			state.push(action.payload);
			return state.slice();
		/**
		 * Update the whole list with the new dataset
		 */
		case ArticlesActions.FETCH:
			return action.payload.slice();
		default:
			return state;
	}
}