
import { useState, useContext } from 'react';
import { BooksContext } from '../state';
import { 
    AssignButton, BookSearchResultsSection, BookImageSection, 
    BookDescriptionSection, BookButtonSection
} from './styles';


const SearchResult = (props) => {
    const {
        readList, setReadList, setOpenToast
    } = useContext(BooksContext);
    const { book} = props;
    console.log(setReadList)

    const SearchBookResult = () => {
        const addBook = (e) => {
            e.preventDefault();
            if (localStorage.getItem('readingList')){
                const readingList = JSON.parse(localStorage.getItem("readingList"));   
                const total = readingList.length;
                book['id'] = total + 1;
                readingList.push(book);
                setReadList(readingList);
                localStorage.setItem("readingList", JSON.stringify(readingList));
            }else{
                const readingList = []
                const total = readingList.length;
                book['id'] = total + 1;
                readingList.push(book);
                setReadList(readingList);
                localStorage.setItem("readingList", JSON.stringify(readingList));
            }
            setOpenToast(true);
        };
        return (
            <BookSearchResultsSection>
                <BookImageSection>
                    <img src={book.coverPhotoURL} width={250} alt={book.title} />
                </BookImageSection>
                <BookDescriptionSection>
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    <p>Level: {book.readingLevel}</p>
                </BookDescriptionSection>
                <BookButtonSection>
                    <AssignButton onClick={(e) => addBook(e)}>Add Book</AssignButton>
                </BookButtonSection>
            </BookSearchResultsSection>
        )
    };

    return (
        <>
            <SearchBookResult />
        </>
    );
};

export default SearchResult;