import React from 'react';
import styles from './Loader.scss';

function Loader() {
  return (
    <section className={styles.Loader}>
      <div className="ripple">
        {/* divs are needed to create ripple effect */}
        <div></div>
        <div></div>
      </div>  
    </section>
  );
}

export default Loader;

