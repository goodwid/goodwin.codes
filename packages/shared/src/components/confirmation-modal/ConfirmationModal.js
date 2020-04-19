import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConfirmationModal.scss';

import { MdClose as Close } from 'react-icons/md';
// import { Button } from '@material-ui/core';

const ConfirmationModal = props => {
  const { handleConfirmationClose, handleNoClicked, handleYesClicked } = props;

  return (
    <article className={styles.ConfirmationModal}>
      <div className="overlay" onClick={handleConfirmationClose} />
      <aside className="modal-body">
        <button onClick={handleConfirmationClose} className="close-button">
          <Close />
        </button>
        <main className="content">
          <h2 className="question">Are you sure?</h2>
          <section className="selection-buttons">
            <button className="btn-approve" onClick={handleYesClicked}>
              YES
            </button>
            <button className="btn-decline" onClick={handleNoClicked}>
              NO
            </button>
          </section>
        </main>
      </aside>
    </article>
  );
};

ConfirmationModal.propTypes = {
  handleConfirmationClose: PropTypes.func.isRequired,
  handleYesClicked: PropTypes.func.isRequired,
  handleNoClicked: PropTypes.func.isRequired,
};

export default ConfirmationModal;
