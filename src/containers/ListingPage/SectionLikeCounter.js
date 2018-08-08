import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const SectionLikeCounter = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

export default SectionLikeCounter;
