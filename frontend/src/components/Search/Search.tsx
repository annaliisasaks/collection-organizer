import React, { useState } from 'react';
import Button from '../Button/Button';
import InputField from '../Input/InputField';
import Select from '../Select/Select';
import './search.scss';

interface ISearchProps {
    onButtonClick: (query: { input: string, category: string }) => void;
}
const Search = (props: ISearchProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { onButtonClick } = props;
  const handleSubmit = (e: React.MouseEvent):void => {
    e.preventDefault();
    const query = { input: searchTerm, category: selectedCategory || 'Nimi' };
    onButtonClick(query);
  };

  return (
    <form action="/" method="get" className="search__form">
      <InputField type="text" name="query" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Otsi" />
      <Select options={['Nimi', 'Seisukord', 'Asukoht', 'Suurus', 'Kuju', 'Materjal']} name="category" label="category" hideLabel onChange={(e) => setSelectedCategory(e.target.value)} />
      <Button purpose="primary" type="submit" onClick={handleSubmit}>Otsi</Button>
    </form>

  );
};

export default Search;
