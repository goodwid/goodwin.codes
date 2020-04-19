
import Profile from 'components/profile/Profile.js';
import Auth from 'components/authentication/auth/Auth.js';
import Home from 'components/home/Home';

export const routes = {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/',
  },
  PROFILE: {
    path: '/profile',
    component: Profile,
    linkTo: () => '/profile',
  },
  AUTH: {
    path: '/auth',
    component: Auth,
    linkTo: () => '/auth',
  },

};
