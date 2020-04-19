import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'shared/services/firebase/firebase';

const PrivateRoute = ({ component: Component, render, ...rest }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={props => {
        if (loading) return <h2>LOADING...</h2>;
        if (error) return <h2>{error}</h2>;
        if (!user)
          return (
            <Redirect
              to={{
                pathname: '/auth',
                state: { from: props.location.pathname },
              }}
            />
          );

        if (Component) return <Component {...props} />;
        if (render) return render(props);
        return null;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object,
};

export default PrivateRoute;
