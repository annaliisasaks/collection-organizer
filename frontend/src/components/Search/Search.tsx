import React, { useState } from 'react';
import Button from '../Button/Button';
import Textfield from '../Input/Textfield';
import Select from '../Select/Select';
import './search.scss';

interface Props {
    onButtonClick: (value: string) => void;
}
const Search = (props: Props): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const { onButtonClick } = props;
  const handleSubmit = (e: React.MouseEvent):void => {
    e.preventDefault();
    onButtonClick(searchTerm);
  };

  return (
    <form action="/" method="get">
      <Textfield type="text" name="query" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Select options={['Nimi', 'Seisukord', 'Asukoht']} name="category" label="category" hideLabel />
      <Button purpose="primary" type="submit" onClick={handleSubmit}>Otsi</Button>
    </form>

  );
};

export default Search;
