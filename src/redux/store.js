import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//the idea of middlewares is that if we want to add middlewares to the store we just add them here to the array
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
