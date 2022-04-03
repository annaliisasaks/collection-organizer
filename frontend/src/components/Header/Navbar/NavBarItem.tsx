import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UnitContext from '../../../Context/PostContext';
import ListItem from '../../List/ListItem';
import './navBarItem.scss';

interface INavBarItemProps {
    navLink:{name: string, path:string};
    isActive?: boolean;
    onClick: (e: string) => void;
    showCompareCount?: boolean;
}

const NavBarItem = (props: INavBarItemProps):JSX.Element => {
  const { compare } = useContext(UnitContext);

  const {
    navLink, isActive = false, onClick, showCompareCount,
  } = props;

  const handleClick = (): void => {
    onClick(navLink.name);
  };
  console.log(showCompareCount);
  return (
    <ListItem className="header__nav-item">
      <Link
        to={navLink.path}
        onClick={handleClick}
        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        {navLink.name}
      </Link>
      {navLink.name === 'Võrdlus' && showCompareCount && <span className="header__compare-count"><span className="header__compare-count-inner">{compare.length}</span></span>}
    </ListItem>
  );
};

export default NavBarItem;
