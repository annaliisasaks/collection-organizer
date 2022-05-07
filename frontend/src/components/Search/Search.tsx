import React, { useState } from 'react';
import Button from '../Button/Button';
import InputField from '../Input/InputField';
import Select, { IOption } from '../Select/Select';
import './search.scss';

interface ISearchProps {
    onButtonClick: (query: { input: string, category: string }) => void;
    onClearClick: () => void;
}

const FILTER_OPTIONS: IOption[] = [
  { value: 'name', display: 'Nimi' },
  { value: 'condition', display: 'Seisukord' },
  { value: 'location', display: 'Asukoht' },
  { value: 'size', display: 'Suurus' },
  { value: 'shape', display: 'Kuju' },
  { value: 'material', display: 'Materjal' },
];

const Search = (props: ISearchProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { onButtonClick, onClearClick } = props;
  const handleSubmit = ():void => {
    const query = { input: searchTerm, category: selectedCategory || 'name' };
    onButtonClick(query);
  };
  const handleClear = (): void => {
    setSearchTerm('');
    setSelectedCategory('');
    onClearClick();
  };

  return (
    <div className="search__form">
      <InputField type="text" name="query" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Otsi" />
      <Select value={selectedCategory} options={FILTER_OPTIONS} name="category" label="category" hideLabel onChange={(e) => setSelectedCategory(e.target.value)} />
      <Button purpose="primary" type="submit" onClick={handleSubmit}>Otsi</Button>
      <Button purpose="delete" type="submit" onClick={handleClear}>Tühjenda</Button>
    </div>
  );
};

export default Search;
