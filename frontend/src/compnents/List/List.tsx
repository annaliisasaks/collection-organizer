import React, { Children } from 'react';

export interface IListProps {
    ordered: boolean;
}

function List(listProps: IListProps): JSX.Element {
  const { ordered } = listProps;
  const ListElement = ordered ? 'ol' : 'ul';
  return (
    <ListElement>
      {Children}
    </ListElement>
  );
}

export default List;
