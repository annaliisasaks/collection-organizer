import React from 'react';
import { mount } from 'enzyme';
import Image from './Image';

describe('Image', () => {
  it('renders with class', () => {
    const wrapper = mount(<Image className="test-class" src="test" alt="test" />);
    expect(wrapper.find('div.image.test-class')).toHaveLength(1);
  });
  it('renders with size tiny', () => {
    const wrapper = mount(<Image size="tiny" src="test" alt="test" />);
    expect(wrapper.find('div.image.image--tiny')).toHaveLength(1);
  });
  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Image onClick={onClick} src="test" alt="test" />);
    wrapper.find('div.image').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with highlight', () => {
    const wrapper = mount(<Image isHighlighted src="test" alt="test" />);
    expect(wrapper.find('div.image.image--highlighted')).toHaveLength(1);
  });
});
