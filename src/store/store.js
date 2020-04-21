import { createStore, combineReducers } from 'redux';

import loginReducer from '../reducers/loginReducer'
export default () => {
  const store = createStore(
    combineReducers({
      login: loginReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}