import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  it('renders with delete button', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Search
      onButtonClick={onClick}
      onClearClick={onClick}
    />);
    expect(wrapper.find('button.button--delete')).toHaveLength(1);
  });
  it('renders with search button', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Search
      onButtonClick={onClick}
      onClearClick={onClick}
    />);
    expect(wrapper.find('button.button--primary')).toHaveLength(1);
  });
  it('renders with select', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Search
      onButtonClick={onClick}
      onClearClick={onClick}
    />);
    expect(wrapper.find('select')).toHaveLength(1);
  });
  it('renders with input field', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Search
      onButtonClick={onClick}
      onClearClick={onClick}
    />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
