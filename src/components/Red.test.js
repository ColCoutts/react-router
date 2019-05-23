import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red component', () => {
  it('renders Red snapshot', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  });
});

