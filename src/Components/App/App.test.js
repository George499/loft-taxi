import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'
import Header from '../Header/Header';
import * as ContextLogin from '../Context/Context';


jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));

describe('<App />', () => {
  it('it should mock the context', () => {
    const contextValues = { color: 'orange' };
    jest
      .spyOn(ContextLogin, 'useContextLogin')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header pages={{name: 'profile'}, {name: 'map'}, {name: 'login'}}/>)).toBeFalsy();
  });
  it("renders without crashing", () => {      
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  it("header showing buttons", () => {    
    const header = shallow(<Header pages={{name: 'profile'}, {name: 'map'}, {name: 'login'}} />)
    expect(header.find('button'))
  });
  
});

