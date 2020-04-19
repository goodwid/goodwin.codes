import { routes } from 'routes/routes';

import {
  // FaUser as User,
  FaHome as Home,
} from 'react-icons/fa';

const {
  HOME,
  // PROFILE,
} = routes;

export default [
  {
    Icon: Home,
    to: HOME.linkTo(),
    title: 'Home',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  // {
  //   Icon: User,
  //   to: PROFILE.linkTo(),
  //   title: 'Profile',
  //   label: 'Visit your profile to edit information about yourself',
  //   requiresAuth: false,
  // },
];
