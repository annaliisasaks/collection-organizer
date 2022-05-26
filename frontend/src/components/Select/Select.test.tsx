import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';

describe('Select', () => {
  it('renders with class', () => {
    const wrapper = mount(<Select className="test-class" options={[]} name="" label="" />);
    expect(wrapper.find('select.select.test-class')).toHaveLength(1);
  });
  it('renders with label', () => {
    const wrapper = mount(<Select options={[]} name="" label="test-label" />);
    expect(wrapper.text().includes('test-label')).toBe(true);
  });
  it('renders with hidden label', () => {
    const wrapper = mount(<Select options={[]} hideLabel name="" label="test-label" />);
    expect(wrapper.find('label').props()).toHaveProperty('hidden');
  });
  it('renders with multiple options', () => {
    const wrapper = mount(<Select
      options={[
        {
          value: 'test',
          display: 'test',
        },
        {
          value: 'test2',
          display: 'test2',
        },
      ]}
      hideLabel
      name=""
      label="test-label"
    />);
    expect(wrapper.find('option')).toHaveLength(2);
  });
});
