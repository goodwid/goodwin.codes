/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.scss';

import {
  FaStar as Star,
  FaRegStar as OutlinedStar,
  FaStarHalfAlt as HalfStar,
} from 'react-icons/fa';

const Stars = props => {
  const { rating } = props;

  const createStar = (starPosition) => {
    const Icon = rating >= starPosition       ? Star : 
                 rating > starPosition - 0.6  ? HalfStar :
                                                OutlinedStar;
    return (<Icon className="icon" />);
  };

  return (
    <span className={styles.Stars}>
      { createStar(1) }
      { createStar(2) }
      { createStar(3) }
      { createStar(4) }
      { createStar(5) }  
    </span>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
