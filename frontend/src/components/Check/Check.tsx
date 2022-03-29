import React from 'react';
import './check.scss';

const Check = (): JSX.Element => (
  <label className="check">
    <input type="checkbox" name="checkbox" />
    <span className="check__label">check</span>
  </label>

);
export default Check;
