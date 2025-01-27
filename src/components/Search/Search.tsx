import { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';
import { useStyles } from './Search.styles';
import { Input } from '../Input';

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className={classes.root}>
      <Input
        type={'text'}
        placeholder={'Search'}
        onInputChange={handleSearch}
        value={search}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
