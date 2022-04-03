import React, {
  useContext, useEffect, useState,
} from 'react';
import './check.scss';
import UnitContext from '../../Context/PostContext';

interface ICheckProps {
  id: string;
}

const Check = (props: ICheckProps): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const { id } = props;

  const { addCompare, compare, deleteCompare } = useContext(UnitContext);
  const isInCompare = !!compare.find((unit) => unit._id === id);

  useEffect(() => {
    setChecked(isInCompare);
  }, [isInCompare]);
  const handleCheck = (): void => {
    if (isInCompare) {
      deleteCompare(id);
    } else {
      addCompare(id);
    }
  };

  return (
    <label className="check">
      <input
        type="checkbox"
        name="checkbox"
        onChange={handleCheck}
        checked={checked}
      />
      <span className="check__label">check</span>
    </label>

  );
};
export default Check;
