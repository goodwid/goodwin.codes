import React, { useState } from 'react';
import styles from './Header.scss';
import Menu from './Menu';
import { app } from 'root/app.config.js';
import { generateSubHeader } from 'shared/utils/date';



// 3RD PARTY LIBRARY
import { FaBars as MenuIcon, FaBell as Notification } from 'react-icons/fa';

const Header = ({ menuItems }) => {

  const [showMenu, setShowMenu] = useState(false);
  const subHeader = generateSubHeader();

  const handleMenu = (showMenu = false) => {
    setShowMenu({ showMenu });
  };

  const handleNav = () => {
    handleMenu(!showMenu);
  };

  return (
    <header className={styles.Header}>
      <div className="header-box">
        Today's Weather:Hi 54F, cloudy, late showers.
      </div>
      <h1>{app.title}</h1>
      <div className="header-box">
        Daily Circulation: 1300
      </div>
      <aside className="subheader" >
        {subHeader}
      </aside>
    </header>
  );
};

export default Header;
