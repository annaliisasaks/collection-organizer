import React from 'react';
import { IInitialPaginationData } from '../../Context/AppContext';
import Button from '../Button/Button';
import './pagination.scss';

interface IPaginationProps {
    paginationData: IInitialPaginationData;
    onNextClick: () => void;
    onPrevClick: () => void;
}

const Pagination = (props: IPaginationProps): JSX.Element => {
  const {
    paginationData, onNextClick, onPrevClick,
  } = props;
  return (
    <div className="pagination">
      <Button
        onClick={onPrevClick}
        disabled={!paginationData.hasPrevPage}
        purpose="primary"
      >
        Eelmine

      </Button>
      {paginationData.page}
      /
      {paginationData.totalPages}

      <Button
        onClick={onNextClick}
        disabled={!paginationData.hasNextPage}
        purpose="primary"
      >
        Järgmine

      </Button>
    </div>
  );
};

export default Pagination;
