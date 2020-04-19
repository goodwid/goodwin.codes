import React from 'react';
import styles from './App.scss';

// PROJECT COMPONENTS
import Header from 'shared/components/header/Header';

const App = () => {
  return (
    <main className={styles.App}>
      <Header />
      <section>
        Admin App
      </section>
    </main>
  );
};

export default App;
