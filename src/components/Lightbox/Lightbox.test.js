import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from './Lightbox';

import { Provider } from 'react-redux';
import Store from '../../stateManagement/Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={Store}><Lightbox /></Provider>, div);
});

it('hide when status is false', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={Store}><Lightbox /></Provider>, div);
  console.log(div.childNodes[0].tagName);
});
