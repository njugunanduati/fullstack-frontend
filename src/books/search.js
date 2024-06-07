import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { 
  SearchContainer, TextSearchField, ButtonSearch,
  InputSection, ButtonSection
} from './styles';

export default function Search(props) {
  const { setSearch, books } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchData = () => {
    console.log('Search', searchTerm);
    if (searchTerm !== undefined) {
      books.filter((book) => {
        if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          setSearch(book);
        }
      });
    }else{
      setSearch('');
      setSearchTerm('')
    }
  }
  return (
    <SearchContainer>
      {/* <InputSection>
        <TextSearchField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputSection> */}
      {/* <ButtonSection>
        <ButtonSearch variant="contained" disabled={(searchTerm)? false: true} onClick={() => searchData()}>
          Search
        </ButtonSearch>
      </ButtonSection> */}

      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search books' }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton 
        type="button" 
        sx={{ p: '10px' }} 
        aria-label="search"
        onClick={() => searchData()}
        disabled={(searchTerm)? false: true}
        >
        <SearchIcon />
      </IconButton>
    </Paper>
        
    </SearchContainer>
  );
}