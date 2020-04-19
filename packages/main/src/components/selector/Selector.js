import React from 'react';
import propTypes from 'prop-types';

import styles from './Selector.scss';

const Selector = ({ categories, handler }) => {

  if (!categories) return (<p>Nothing loaded.</p>);

  return (
    <section className={styles.Selector}>
      { categories.map((c, i) => {
        return (
          <section className="category" key={i}>
            <input name="category" onClick={({ target }) => handler(target.value)} type="radio" id={`cinput${i}`} value={i}></input>
            <label htmlFor={`cinput${i}`}>{c}</label>
          </section>
        );
      })}
    </section>
  );
};

Selector.propTypes = {
  categories: propTypes.array,
  handler: propTypes.func,
};

export default Selector;
