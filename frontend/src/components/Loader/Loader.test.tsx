import React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('renders in dark theme', () => {
    const wrapper = mount(<Loader theme="dark" />);
    expect(wrapper.find('div.loader.loader--dark')).toHaveLength(1);
  });
});
