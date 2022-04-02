import React, { useContext } from 'react';
import Content from '../../components/Content/Content';
import UnitContext from '../../Context/PostContext';

const ComparePage = ():JSX.Element => {
  const { compare } = useContext(UnitContext);
  return (
    <Content direction="column" align="center">
      test
      {compare && compare.map((unit) => unit.name)}

    </Content>
  );
};

export default ComparePage;
