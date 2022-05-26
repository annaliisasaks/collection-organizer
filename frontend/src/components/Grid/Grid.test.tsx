import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';
import GridColumn from './GridColumn';

describe('Grid', () => {
  it('renders with class', () => {
    const wrapper = mount(<Grid className="test-class">Test</Grid>);
    expect(wrapper.find('div.grid.test-class')).toHaveLength(1);
  });
  it('renders with center alignment', () => {
    const wrapper = mount(<Grid align="center">Test</Grid>);
    expect(wrapper.find('div.grid.grid--align-center')).toHaveLength(1);
  });
  it('renders with direction column', () => {
    const wrapper = mount(<Grid direction="column">Test</Grid>);
    expect(wrapper.find('div.grid.grid--column')).toHaveLength(1);
  });
  it('renders with small gap', () => {
    const wrapper = mount(<Grid gap="small">Test</Grid>);
    expect(wrapper.find('div.grid.grid--gap-small')).toHaveLength(1);
  });
  it('renders with small width', () => {
    const wrapper = mount(<Grid width="small">Test</Grid>);
    expect(wrapper.find('div.grid.grid--small')).toHaveLength(1);
  });

  it('renders with center justify content', () => {
    const wrapper = mount(<Grid justify="center">Test</Grid>);
    expect(wrapper.find('div.grid.grid--justify-center')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<Grid>Test</Grid>);
    expect(wrapper.text().includes('Test')).toBe(true);
  });
});

describe('Grid column', () => {
  it('renders with class', () => {
    const wrapper = mount(<GridColumn className="test-class">Test</GridColumn>);
    expect(wrapper.find('div.grid-column.test-class')).toHaveLength(1);
  });
  it('renders with small width', () => {
    const wrapper = mount(<GridColumn width={['xs-6']}>Test</GridColumn>);
    expect(wrapper.find('div.grid-column.grid-column--xs-6')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<GridColumn>Test</GridColumn>);
    expect(wrapper.text().includes('Test')).toBe(true);
  });
});
