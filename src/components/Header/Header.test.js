import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';

import { Provider } from 'react-redux';
import Store from '../../stateManagement/Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={Store}><Header /></Provider>, div);
});

it('renders the list of links', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={Store}><Header links={{ home: true }}/></Provider>, div);
  expect(div.getElementsByClassName('Header__link').length).toBe(1);
});

it('paints correctly the link', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={Store}><Header links={{ home: true }}/></Provider>, div);
  expect(div.getElementsByClassName('Header__link')[0].getAttribute('href')).toBe(`#/home`);
});