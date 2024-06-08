import { createContext, useState, useEffect } from 'react';
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
    const [readList, setReadList] = useState([]);

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
        setShowList,
        readList, 
        setReadList
    };

    useEffect(() => {
        if (localStorage.getItem('readingList')){
            setReadList(JSON.parse(localStorage.getItem('readingList')));
        }else{
            setReadList([]);
        }
    }, [localStorage.getItem("readingList")])

    // pass the value in provider and return
    return <BooksContext.Provider value={bookContext}>{children}</BooksContext.Provider>;
};

BooksProvider.propTypes = {
    books: PropTypes.array,
    search: PropTypes.object,
    searchTerm: PropTypes.string,
    openToast: PropTypes.bool,
    showList: PropTypes.bool,
    readList: PropTypes.array, 
};

BooksProvider.defaultProps = {
    books: [],
    search: null,
    searchTerm: null,
    openToast: false,
    showList: false,
    readList: [],
};
