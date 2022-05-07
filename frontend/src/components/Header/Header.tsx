import React, { useContext, useState } from 'react';
import List from '../List/List';
import NavBarItem from './Navbar/NavBarItem';

import './header.scss';
import Button from '../Button/Button';
import UnitContext from '../../Context/PostContext';

import { removeAuthorizationHeader } from '../../api';

interface IMenuItem {
  name: string,
  path: string,
}
const menuItems: IMenuItem[] = [
  { name: 'Esileht', path: '/' },
  { name: 'Võrdlus', path: '/vordlus' },
  { name: 'Galerii', path: '/galerii' },
  { name: 'Lisa uus', path: '/kirje/lisa' }];

const Header = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('Esileht');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsLoggedIn, compare } = useContext(UnitContext);

  const renderNavButton = (opened: boolean): JSX.Element => (
    opened ? (
      <span className="cross">
        <span className="cross__line" />
        <span className="cross__line" />
      </span>

    ) : (
      <span className="burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </span>
    )
  );

  const handleLogOut = (): void => {
    removeAuthorizationHeader();
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <button
          className="header__btn"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {renderNavButton(isMenuOpen)}
          Menüü
        </button>
        <List
          className={`header__nav-list ${isMenuOpen ? 'header__nav-list--open' : ''}`}
        >
          {menuItems.map((menuItem, index) => (
            <NavBarItem
              key={index}
              navLink={menuItem}
              isActive={selectedTab === menuItem.name}
              onClick={setSelectedTab}
              showCompareCount={compare.length > 0}
            />
          ))}
          <Button
            purpose="primary"
            onClick={handleLogOut}
            className="header__log-out-button"
          >
            Logi välja
          </Button>
        </List>
      </nav>
    </header>
  );
};

export default Header;
