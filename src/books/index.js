import React, { useState, useEffect, useContext } from "react";
import { GET_BOOKS } from "../services/gql-queries";
import { useGraph } from './get-data';
import Book from "./book";
import Search from "./search";
import SearchResult from "./search-result";
import DisplayReadingList from "./display-reading-list";
import { 
    MainContainer, HeaderSection, PaginationSection, BooksSection,
    SearchSection
} from "./styles";
import Paginate from '../components/paginate';
import { BooksContext } from '../state';
import { Button } from "@mui/material";
import { Toast } from "../components/toast";

const Books = () => {
    const {
        books, setBooks, search, setSearch, openToast, setOpenToast,
        showList, setShowList
    } = useContext(BooksContext);
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

    const clearSearchForm = () => {
        setSearch('');
    };

    const handleClose = () => {
        setOpenToast(false);
    };

    const getShowList = () => {
        setShowList(!showList);
    };

    const hideList = () => {
        setShowList(!showList);
    };

    return (
        <MainContainer>
            <HeaderSection>
                <h1>Ello Book App</h1>
            </HeaderSection>
            <SearchSection>
                {(search === '')?<Search books={books} setSearch={setSearch}/>: <Button sx={{ backgroundColor: '#F76434', color: "#FFFFFF"}} onClick={(e) => clearSearchForm(e)}>Go Back</Button>}
                {(showList)? <Button sx={{ backgroundColor: '#F76434', color: "#FFFFFF"}} onClick={(e) => hideList(e)}>Hide List</Button>:
                <Button sx={{ backgroundColor: '#F76434', color: "#FFFFFF"}} onClick={(e) => getShowList(e)}>Show List</Button>}
            </SearchSection>
            {(showList)?<h2>Selected Books</h2> : (search !== '')?<h2>Search Results</h2>:<h2>Available Books</h2>}
            <BooksSection> 
                {(!showList)?(search !== '')? <SearchResult book={search} /> :
                    <Book books={currentBooks} />: null}
                {(showList)?<DisplayReadingList />: null}
            </BooksSection>
            <PaginationSection>
                {(search === '')?<Paginate booksPerPage={dataPerPage} totalBooks={books.length} paginate={paginate} /> : null}
            </PaginationSection>
            <Toast openToast={openToast} handleClose={handleClose} book={search} />
        </MainContainer>
    );
};

export default Books