import React, { useState } from 'react';
import styles from './Header.scss';
import Menu from './Menu';
import { app } from 'root/app.config.js';
import { daysFromDate } from 'shared/utils/date';
const ORIGIN = 123459720000;



// 3RD PARTY LIBRARY
import { FaBars as MenuIcon, FaBell as Notification } from 'react-icons/fa';

const Header = ({ menuItems }) => {

  const year = Date.get

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (showMenu = false) => {
    setShowMenu({ showMenu });
  };

  const handleNav = () => {
    handleMenu(!showMenu);
  };

  return (
    <header className={styles.Header}>
      <div className="header-box">
        This is extra stuff;
      </div>
      <h1>{app.title}</h1>

      <aside>
        Portland, OR, Monday April 20, 2020  Volume XLVI Issue No. {daysFromDate(ORIGIN)}
      </aside>
    </header>
  );
};

export default Header;
