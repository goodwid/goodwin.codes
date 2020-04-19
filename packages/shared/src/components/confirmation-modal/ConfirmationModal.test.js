import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from './ConfirmationModal';

describe('ConfirmationModal page', () => {
  it('matches the snapshot', () => {
    const handleConfirmationClose = jest.fn();
    const handleYesClicked = jest.fn();
    const handleNoClicked = jest.fn();
    const wrapper = shallow(
      <ConfirmationModal handleConfirmationClose={handleConfirmationClose}
        handleNoClicked={handleNoClicked}
        handleYesClicked={handleYesClicked}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
