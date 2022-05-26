import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders with class', () => {
    const wrapper = mount(<Card className="test-class">Test</Card>);
    expect(wrapper.find('div.card.test-class')).toHaveLength(1);
  });
  it('renders with white background', () => {
    const wrapper = mount(<Card backgroundColor="white">Test</Card>);
    expect(wrapper.find('div.card.card--white')).toHaveLength(1);
  });
  it('renders without bottom border radius', () => {
    const wrapper = mount(<Card borderRadius={{ bottom: 'none' }}>Test</Card>);
    expect(wrapper.find('div.card.card--border-radius-bottom-none')).toHaveLength(1);
  });

  it('renders without top border radius', () => {
    const wrapper = mount(<Card borderRadius={{ top: 'none' }}>Test</Card>);
    expect(wrapper.find('div.card.card--border-radius-top-none')).toHaveLength(1);
  });
  it('renders with medium padding', () => {
    const wrapper = mount(<Card padding="medium">Test</Card>);
    expect(wrapper.find('div.card.card--padding-medium')).toHaveLength(1);
  });
  it('renders full width', () => {
    const wrapper = mount(<Card fullWidth>Test</Card>);
    expect(wrapper.find('div.card.card--wide')).toHaveLength(1);
  });

  it('calls given onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Card onClick={onClick}>Test</Card>);
    wrapper.find('div.card').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('renders with children', () => {
    const wrapper = mount(<Card>Test</Card>);
    expect(wrapper.text().includes('Test')).toBe(true);
  });
});
