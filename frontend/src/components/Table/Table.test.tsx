import React from 'react';
import { mount } from 'enzyme';
import Table from './Table';
import TableHead from './TableHead';
import TableData from './TableData';
import TableRow from './TableRow';

describe('Table', () => {
  it('renders with class', () => {
    const wrapper = mount(<Table className="test-class">test</Table>);
    expect(wrapper.find('table.table.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<Table>test</Table>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
});

describe('Table head', () => {
  it('renders with class', () => {
    const wrapper = mount(<TableHead className="test-class">test</TableHead>);
    expect(wrapper.find('th.table-head.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<TableHead>test</TableHead>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
});

describe('Table data', () => {
  it('renders with class', () => {
    const wrapper = mount(<TableData className="test-class">test</TableData>);
    expect(wrapper.find('td.table-data.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<TableData>test</TableData>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
});

describe('Table row', () => {
  it('renders with class', () => {
    const wrapper = mount(<TableRow className="test-class">test</TableRow>);
    expect(wrapper.find('tr.table-row.test-class')).toHaveLength(1);
  });
  it('renders with children', () => {
    const wrapper = mount(<TableRow>test</TableRow>);
    expect(wrapper.text().includes('test')).toBe(true);
  });
});
