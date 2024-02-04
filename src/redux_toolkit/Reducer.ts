import { combineReducers } from 'redux';
import cartReducer from './features/cartSlice';
import articleReducer from './features/articlesSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  article: articleReducer,
});

export default rootReducer;
