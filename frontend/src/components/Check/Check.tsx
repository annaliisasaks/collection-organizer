import React, {
  useContext, useEffect, useState,
} from 'react';
import './check.scss';
import UnitContext from '../../Context/AppContext';

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
  const handleCheck = (e: React.ChangeEvent): void => {
    e.stopPropagation();
    if (isInCompare) {
      deleteCompare(id);
    } else {
      addCompare(id);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <label onClick={(e) => e.stopPropagation()} className="check">
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
