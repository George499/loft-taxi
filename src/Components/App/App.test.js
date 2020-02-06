import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'
import Header from '../Header/Header';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders shallow', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.contains(<Header pages={{name: 'profile'}, {name: 'map'}, {name: 'login'}}/>)).toBeFalsy();
}) 