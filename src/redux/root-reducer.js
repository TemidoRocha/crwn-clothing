//it represents all the state of our app
//it combines all our states together
//we will have different reducers in order to clean our code

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
