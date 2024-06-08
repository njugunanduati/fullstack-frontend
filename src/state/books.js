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
    const [openToast, setOpenToast] = useState(false);
    const [showList, setShowList] = useState(false);

    // Make the context object:
    const bookContext = {
        searchTerm, 
        setSearchTerm,
        books, 
        setBooks,
        search, 
        setSearch,
        openToast, 
        setOpenToast,
        showList, 
        setShowList
    };

    // pass the value in provider and return
    return <BooksContext.Provider value={bookContext}>{children}</BooksContext.Provider>;
};

BooksProvider.propTypes = {
    books: PropTypes.array,
    search: PropTypes.object,
    searchTerm: PropTypes.string,
    openToast: PropTypes.bool,
    showList: PropTypes.bool 
};

BooksProvider.defaultProps = {
    books: [],
    search: null,
    searchTerm: null,
    openToast: false,
    showList: false, 
};
