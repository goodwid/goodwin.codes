import React from 'react';
import { shallow } from 'enzyme';
import Stars from './Stars';

describe('Stars page', () => {
  it('matches the snapshot', () => {
    const rating = 4;

    const wrapper = shallow(
      <Stars rating={rating}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
