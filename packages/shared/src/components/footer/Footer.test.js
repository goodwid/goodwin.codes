import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

import {
  FaUser as User,
  FaList as JobList,
  FaIdBadge as JobBadge,
} from 'react-icons/fa';

const footerButtons = [
  {
    Icon: User,
    to: '/profile',
    title: 'Profile',
    label: 'Visit your profile to edit information about yourself',
  },
  {
    Icon: JobList,
    to: '/',
    title: 'Job List',
    label: 'Visit the job queue to see a list of available jobs',
  },
  {
    Icon: JobBadge,
    to: '/myjobs',
    title: 'My Jobs',
    label: 'Visit your jobs list to see a list of your completed, applied and scheduled jobs',
  },
];

describe('Footer page', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Footer buttons={footerButtons} />);
    expect(wrapper).toMatchSnapshot();
  });
});
