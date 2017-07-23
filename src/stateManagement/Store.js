import { createStore, combineReducers} from 'redux';
import articles from './reducers/articles.reducer';
import lightbox from './reducers/lightbox.reducer';

const reducers = combineReducers({
	articles,
  lightbox
});

const Store = createStore(reducers);
export default Store;