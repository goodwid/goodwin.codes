import React, { useState } from 'react';
import styles from './Header.scss';
import Menu from './Menu';
import { app } from 'root/app.config.js';


// 3RD PARTY LIBRARY
import { FaBars as MenuIcon, FaBell as Notification } from 'react-icons/fa';

const Header = ({ menuItems }) => {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (showMenu = false) => {
    setShowMenu({ showMenu });
  };

  const handleNav = () => {
    handleMenu(!showMenu);
  };

  return (
    <header className={styles.Header}>
      <MenuIcon className="header-icon-left" onClick={() => handleMenu(true)} />
      <h1>{app.title}</h1>
      <Notification className="header-icon-right" />
      { showMenu &&
        <Menu handleNav={handleNav} menuItems={menuItems} auth={true}/>
      }
    </header>
  );
};

export default Header;
