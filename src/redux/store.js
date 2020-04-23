import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;

// please check if redux devtools ext is installed before starting it 
//git clone https://github.com/reduxjs/redux-devtools.git
// cd redux-devtools/packages/redux-devtools
// Run npm install in the package folder:

// npm install
// Now you can open an example folder and run npm install there:

// cd examples/counter # or examples/todomvc
// npm install
// Finally, run the development server and open the page:

// npm start
// open http://localhost:3000