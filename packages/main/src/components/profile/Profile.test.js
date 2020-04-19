import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile page', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Profile/>);
    expect(wrapper).toMatchSnapshot();
  });
});
