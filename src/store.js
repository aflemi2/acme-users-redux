import { createStore, combineReducers } from 'redux';

const usersReducer = (state=[], action)=> {
  return state;
};
const productsReducer = (state=[], action)=> {
  return state;
};

const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer
});

const store = createStore(reducer);

export default store;
