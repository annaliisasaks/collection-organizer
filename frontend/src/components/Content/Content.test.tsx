import React from 'react';
import { mount } from 'enzyme';
import Content from './Content';

describe('Content', () => {
  it('renders with class', () => {
    const wrapper = mount(<Content className="test-class">Test</Content>);
    expect(wrapper.find('div.content.test-class')).toHaveLength(1);
  });
  it('renders with center alignment', () => {
    const wrapper = mount(<Content align="center">Test</Content>);
    expect(wrapper.find('div.content.content--center')).toHaveLength(1);
  });
  it('renders with direction column', () => {
    const wrapper = mount(<Content direction="column">Test</Content>);
    expect(wrapper.find('div.content.content--column')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<Content>Test</Content>);
    expect(wrapper.text().includes('Test')).toBe(true);
  });
});
