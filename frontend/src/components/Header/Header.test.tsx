import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBarItem from './Navbar/NavBarItem';
import Header from './Header';

describe('Nav bar item', () => {
  it('renders active', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Router>
        <NavBarItem
          onClick={onClick}
          navLink={{
            name: 'test',
            path: '/',
          }}
          isActive
        />
      </Router>,
    );
    expect(wrapper.find('a.header__nav-link.header__nav-link--active')).toHaveLength(1);
  });

  it('renders with compare count', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Router>
        <NavBarItem
          onClick={onClick}
          navLink={{
            name: 'Võrdlus',
            path: '/',
          }}
          showCompareCount
        />
      </Router>,
    );
    expect(wrapper.find('span.header__compare-count')).toHaveLength(1);
  });

  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Router>
        <NavBarItem
          onClick={onClick}
          navLink={{
            name: 'Võrdlus',
            path: '/',
          }}
          showCompareCount
        />
      </Router>,
    );
    wrapper.find('a.header__nav-link').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('Header', () => {
  it('renders with nav bar items', () => {
    const wrapper = mount(<Router><Header /></Router>);
    expect(wrapper.find('a.header__nav-link')).toHaveLength(4);
  });
  it('renders with log out button', () => {
    const wrapper = mount(<Router><Header /></Router>);
    expect(wrapper.find('button.header__log-out-button')).toHaveLength(1);
  });
  it('renders with menu button in mobile', () => {
    global.innerWidth = 300;
    const wrapper = mount(<Router><Header /></Router>);
    expect(wrapper.find('button.header__btn .burger')).toHaveLength(1);
  });
  it('renders with cross button when menu button is clicked', () => {
    global.innerWidth = 300;
    const wrapper = mount(<Router><Header /></Router>);
    wrapper.find('button.header__btn').simulate('click');
    expect(wrapper.find('button.header__btn .cross')).toHaveLength(1);
  });
});
