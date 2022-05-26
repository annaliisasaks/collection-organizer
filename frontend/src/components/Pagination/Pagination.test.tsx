import React from 'react';
import { mount } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('calls onClick when clicked on prev button', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Pagination
      paginationData={{
        hasNextPage: true,
        hasPrevPage: true,
        page: 2,
        totalPages: 5,
        nextPage: 3,
        prevPage: 1,
        limit: 5,
      }}
      onNextClick={onClick}
      onPrevClick={onClick}
    />);
    wrapper.find('button').at(0).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when clicked on next button', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Pagination
      paginationData={{
        hasNextPage: true,
        hasPrevPage: true,
        page: 2,
        totalPages: 5,
        nextPage: 3,
        prevPage: 1,
        limit: 5,
      }}
      onNextClick={onClick}
      onPrevClick={onClick}
    />);
    wrapper.find('button').at(1).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
