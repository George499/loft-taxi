import React from 'react';
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
  expect(wrapper.contains(<Header/>)).toBeTruthy();
}) 