import React from 'react';
import styles from './Profile.scss';
import Stars from 'shared/components/stars/Stars';

// 3RD PARTY LIBRARIES
import {
  FaEdit as Edit,
  FaCog as Settings,
} from 'react-icons/fa';

const Profile = () => {
  return (
    <article className={styles.Profile}>
      <section className="profile-header">
        <Edit className="edit" />
        <Settings className="settings" />
        <h1 className="name">Your Name</h1>
        <h2 className="description">Description</h2>
      </section>
      <section className="details-section">
        <Stars rating={3}/>
        <section className="bio-section">
          <h3>Bio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </section>
    </article>
  );
};

export default Profile;
