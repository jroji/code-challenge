import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import articles from './reducers/articles.reducer';
import lightbox from './reducers/lightbox.reducer';

const reducers = combineReducers({
	articles,
	lightbox
});

const Store = createStore(reducers, { articles: [], lightbox: false }, applyMiddleware(thunk));
export default Store;