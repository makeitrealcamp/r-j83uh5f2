import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the textarea', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('textarea').length).toBe(1);
});

it('renders the counter', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.counter').length).toBe(1);
  expect(wrapper.find('.counter').text()).toBe("0");
});

it('updates the counter', () => {
  const wrapper = shallow(<App />);
  wrapper.find('textarea').simulate('change', { target: { value: 'Hola Mundo' } });
  expect(wrapper.find('.counter').text()).toBe("10");
});
