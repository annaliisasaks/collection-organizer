import React from 'react';
import Button from '../Button/Button';
import './pagination.scss';

interface IPaginationProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    page: number;
    totalPages: number;
    onNextClick: () => void;
    onPrevClick: () => void;
}

const Pagination = (props: IPaginationProps): JSX.Element => {
  const {
    hasNextPage, hasPrevPage, page, totalPages, onNextClick, onPrevClick,
  } = props;
  return (
    <div className="pagination">
      <Button
        onClick={onPrevClick}
        disabled={!hasPrevPage}
        purpose="primary"
      >
        Eelmine

      </Button>
      {page}
      /
      {totalPages}

      <Button
        onClick={onNextClick}
        disabled={!hasNextPage}
        purpose="primary"
      >
        Järgmine

      </Button>
    </div>
  );
};

export default Pagination;
