import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../../List/ListItem';
import './navBarItem.scss';

interface INavBarItemProps {
    navLink:{name: string, path:string};
    isActive?: boolean;
    onClick: (e: string) => void;
}

const NavBarItem = (props: INavBarItemProps):JSX.Element => {
  const { navLink, isActive = false, onClick } = props;

  const handleClick = (): void => {
    onClick(navLink.name);
  };

  return (
    <ListItem className="header__nav-item">
      <Link
        to={navLink.path}
        onClick={handleClick}
        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        {navLink.name}
      </Link>
    </ListItem>
  );
};

export default NavBarItem;
