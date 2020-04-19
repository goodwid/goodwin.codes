import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

import {
  NavLink,
} from 'react-router-dom';

const Footer = (props) => {
  const { buttons } = props;
  return (
    <nav className={styles.Footer}>
      { buttons.map((button, index) => {
        return (
          <NavLink exact key={index} to={button.to}
            className="nav-button" 
            aria-label={button.label}
            activeClassName="active">
            <button.Icon className="icon" />
            {button.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

Footer.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export default Footer;
