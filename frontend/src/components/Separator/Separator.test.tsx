import React from 'react';
import { mount } from 'enzyme';
import Separator from './Separator';

describe('Separator', () => {
  it('renders as div', () => {
    const wrapper = mount(<Separator type="div" />);
    expect(wrapper.find('div.separator.separator__div')).toHaveLength(1);
  });
  it('renders as hr', () => {
    const wrapper = mount(<Separator type="hr" />);
    expect(wrapper.find('hr.separator.separator__hr')).toHaveLength(1);
  });
  it('renders with size', () => {
    const wrapper = mount(<Separator type="div" size="small" />);
    expect(wrapper.find('div.separator.separator--small')).toHaveLength(1);
  });
  it('renders with color', () => {
    const wrapper = mount(<Separator type="div" color="transparent" />);
    expect(wrapper.find('div.separator.separator--transparent')).toHaveLength(1);
  });
});
