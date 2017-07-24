
export default function articles(state = [], action) {
	switch (action.type) {
		/**
		 * Add one user to the list
		 */
		case 'ADD_ARTICLE':
			state.push(action.payload);
			return state.slice();
		/**
		 * Update the whole list with the new dataset
		 */
		case 'FETCH_ARTICLES':
			return action.payload.slice();
		default:
			return state;
	}
}