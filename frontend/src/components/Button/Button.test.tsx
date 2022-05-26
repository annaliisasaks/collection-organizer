import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders purpose primary', () => {
    const wrapper = mount(<Button purpose="primary">test</Button>);
    expect(wrapper.find('button.button--primary')).toHaveLength(1);
  });

  it('renders purpose delete', () => {
    const wrapper = mount(<Button purpose="delete">test</Button>);
    expect(wrapper.find('button.button--delete')).toHaveLength(1);
  });

  it('renders purpose secondary', () => {
    const wrapper = mount(<Button purpose="secondary">test</Button>);
    expect(wrapper.find('button.button--secondary')).toHaveLength(1);
  });

  it('renders disabled', () => {
    const wrapper = mount(<Button purpose="primary" disabled>test</Button>);
    expect(wrapper.find('button.button--disabled')).toHaveLength(1);
  });

  it('renders with class', () => {
    const wrapper = mount(<Button purpose="primary" className="test-class">test</Button>);
    expect(wrapper.find('button.test-class')).toHaveLength(1);
  });

  it('calls given onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button purpose="primary" onClick={onClick}>test</Button>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with submit type', () => {
    const wrapper = mount(<Button purpose="primary" type="submit">test</Button>);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().type).toBe('submit');
  });
});
