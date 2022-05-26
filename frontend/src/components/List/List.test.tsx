import React from 'react';
import { mount } from 'enzyme';
import List from './List';
import ListItem from './ListItem';

describe('List', () => {
  it('renders with class', () => {
    const wrapper = mount(<List className="test-class">test</List>);
    expect(wrapper.find('ul.list.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<List>test</List>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
  it('renders with direction horizontal', () => {
    const wrapper = mount(<List direction="horizontal">test</List>);
    expect(wrapper.find('ul.list.list--horizontal')).toHaveLength(1);
  });
  it('renders full width', () => {
    const wrapper = mount(<List fullWidth>test</List>);
    expect(wrapper.find('ul.list.list--full-width')).toHaveLength(1);
  });
});

describe('List item', () => {
  it('renders with class', () => {
    const wrapper = mount(<ListItem className="test-class">test</ListItem>);
    expect(wrapper.find('li.list__item.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<ListItem>test</ListItem>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
});
