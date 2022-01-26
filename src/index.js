import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PagePanel } from './components/Library/page';
import './style/style.css';

const initialState = {
  contacts: ['James Smith', 'Thomas Anderson', 'Bruce Wayne'],
  addresses: [
    '221b Baker Street',
    '1400 Pennsylvania Avenue',
    '123 Main Street',
  ],
  phoneNumbers: ['999-999-9999', '888-888-8888', '777-777-7777'],
};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.person],
        addresses: [...state.addresses, action.address],
        phoneNumbers: [...state.phoneNumbers, action.number],
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <PagePanel 
      formClass='newPersonForm'
      listClass='contactsList'
    />
  </Provider>,
  document.getElementById('root')
);
