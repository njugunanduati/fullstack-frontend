import React, { useState } from 'react';
import { 
  FormGroupContainer, TextSearchField, ButtonSearch,
  TextFieldArea, ButtonFieldArea
} from './styles';

export default function Search(props) {
  const { setSearch, books } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchData = () => {
    if (searchTerm !== undefined) {
      books.filter((book) => {
        if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          setSearch(book);
          console.log(book);
        }
      });
    }else{
      setSearch('');
      setSearchTerm('')
    }
  }
  return (
    <FormGroupContainer>
      <TextFieldArea>
        <TextSearchField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </TextFieldArea>
      <ButtonFieldArea>
        <ButtonSearch variant="contained" disabled={(searchTerm)? false: true} onClick={() => searchData()}>
          Search
        </ButtonSearch>
      </ButtonFieldArea>
    </FormGroupContainer>
  );
}