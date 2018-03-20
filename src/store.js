import { createStore, combineReducers } from 'redux';

const usersReducer = (state=[], action)=> {
  switch(action.type){
    case 'SET_USERS':
      state = action.users;
      break;
  }
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
