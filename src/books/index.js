import React, { useState, useEffect, useContext } from "react";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { GET_BOOKS } from "../services/gql-queries";
import { useGraph } from './get-data';
import Book from "./book";
import Search from "./search";
import SearchResult from "./search-result";
import { 
    MainContainer, HeaderSection, PaginationSection, BooksSection,
    SearchSection
} from "./styles";
import Paginate from '../components/paginate';
import { BooksContext } from '../state';
import { Button } from "@mui/material";

const Books = () => {
    const {books, setBooks, search, setSearch} = useContext(BooksContext);
    const [currentPage, setCurrentPage] = useState([]);
    const dataPerPage = 20
    const indexOfLastPage = currentPage - dataPerPage;
    const indexOffirstPage = indexOfLastPage - dataPerPage;
    const currentBooks = books.slice(indexOffirstPage, indexOfLastPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const { data, loading } = useGraph({ query: GET_BOOKS });

    useEffect(() => {
        if (data) {
            setBooks(data.books);
        }
    }, [data]);
    console.log('search', search);

    const clearSearchForm = () => {
        setSearch('');
    }


    return (
        <MainContainer>
            <HeaderSection>
                <h1>Ello Book App</h1>
            </HeaderSection>
            <SearchSection>
                {(search == '')?<Search books={books} setSearch={setSearch}/>: <Button onClick={(e) => clearSearchForm(e)}>Reset</Button>}
            </SearchSection>
            <BooksSection>
                {(search != '')? <SearchResult book={search} /> :
                    <Book books={currentBooks} />}
            </BooksSection>
            <PaginationSection>
                {(search == '')?<Paginate booksPerPage={dataPerPage} totalBooks={books.length} paginate={paginate} /> : null}
            </PaginationSection>
        </MainContainer>
    );
};

export default Books