import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BooksContext = createContext({});

export const BooksProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    // Make the context object:
    const bookContext = {
        searchTerm, 
        setSearchTerm,
        books, 
        setBooks,
        search, 
        setSearch
    };

    // pass the value in provider and return
    return <BooksContext.Provider value={bookContext}>{children}</BooksContext.Provider>;
};

BooksProvider.propTypes = {
    books: PropTypes.array,
    search: PropTypes.object,
    searchTerm: PropTypes.string,
};

BooksProvider.defaultProps = {
    books: [],
    search: null,
    searchTerm: null,
};
