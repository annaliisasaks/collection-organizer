import React from 'react';
import { mount } from 'enzyme';
import InputField from './InputField';
import Textarea from './Textarea';

describe('Input field', () => {
  it('renders with class', () => {
    const wrapper = mount(<InputField
      className="test-class"
      type="number"
      name="test"
    />);
    expect(wrapper.find('input.test-class')).toHaveLength(1);
  });
  it('renders with number type', () => {
    const wrapper = mount(<InputField
      type="number"
      name="test"
    />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('input').props().type).toBe('number');
  });
  it('renders with default value', () => {
    const wrapper = mount(<InputField
      type="number"
      name="test"
      defaultValue="default value"
    />);
    expect(wrapper.find('input').get(0).props.value).toEqual('default value');
  });
});

describe('Textarea', () => {
  it('renders with class', () => {
    const wrapper = mount(<Textarea
      className="test-class"
      name="test"
      rows={2}
      cols={2}
    />);
    expect(wrapper.find('textarea.test-class')).toHaveLength(1);
  });
  it('renders with default value', () => {
    const wrapper = mount(<Textarea
      name="test"
      rows={2}
      cols={2}
      defaultValue="default value"
    />);
    expect(wrapper.find('textarea').get(0).props.defaultValue).toEqual('default value');
  });
});
