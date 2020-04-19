import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

class Menu extends PureComponent {

  static propTypes = {
    handleNav: PropTypes.func,
    menuItems: PropTypes.array,
    auth: PropTypes.bool,
  }

  toggleMenu = () => {
    this.props.handleNav();
  }

  componentDidMount() {
    document.addEventListener('click', this.toggleMenu);
    document.addEventListener('scroll', this.toggleMenu, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.toggleMenu);
    document.removeEventListener('scroll', this.toggleMenu, true);
  }

  render() {
    const { menuItems, auth, handleNav } = this.props;

    return (
      <nav className={styles.Menu}>
        <ul>
          {menuItems && menuItems.map(item => {
            if (auth && item.requiresAuth) return null;
            return (
              <li key={item.title} onClick={() => handleNav()}>
                <item.Icon />
                <Link
                  to={item.to}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
