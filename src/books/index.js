import React, { useState, useEffect, useContext } from "react";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { GET_BOOKS } from "../services/gql-queries";
import { useGraph } from './get-data';
import Book from "./book";
import Search from "./search";
import SearchResult from "./search-result";
import { 
    MainContainer, Heading, PaginationContainer 
} from "./styles";
import Paginate from '../components/paginate';
import { BooksContext } from '../state';
import { Button } from "@mui/material";

const Books = () => {
    const {books, setBooks, search, setSearch} = useContext(BooksContext);
    const [currentPage, setCurrentPage] = useState([]);
    const dataPerPage = 5
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
            <Heading>
                <h1>Ello Book App</h1>
            </Heading>
            <section className="search">
            {(search == '')?<Search books={books} setSearch={setSearch}/>: <Button onClick={(e) => clearSearchForm(e)}>Reset</Button>}
            </section>
            <section className="display-books">
                {(search != '')? <SearchResult book={search} /> :<Stack 
                    direction='row'
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Book books={currentBooks} />
                </Stack>}
            </section>
            <PaginationContainer>
                {(search == '')?<Paginate booksPerPage={dataPerPage} totalBooks={books.length} paginate={paginate} /> : null}
            </PaginationContainer>
        </MainContainer>
    );
};

export default Books