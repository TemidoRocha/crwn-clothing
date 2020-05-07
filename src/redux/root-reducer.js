//it represents all the state of our app
//it combines all our states together
//we will have different reducers in order to clean our code

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//the JSON obj that represents the probable config of the obj we need
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //this array will have all the reducers we want to persist. in this case only cart because user is on the firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
