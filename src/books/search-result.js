
import { useState } from 'react';
import { 
    AssignButton, BookSearchResultsSection, BookImageSection, 
    BookDescriptionSection, BookButtonSection
} from './styles';


const SearchResult = (props) => {
    const [ openToast, setOpenToast ] = useState(true);
    const { book } = props;

    const SearchBookResult = () => {
        const assigBook = (e) => {
            e.preventDefault();
            if (localStorage.getItem('readingList')){
                const readingList = JSON.parse(localStorage.getItem('readingList'));
                const total = readingList.length;
                book['id'] = total + 1;
                readingList.push(book);
                localStorage.setItem("readingList", JSON.stringify(readingList));
            }else{
                const readingList = []
                const total = readingList.length;
                book['id'] = total + 1;
                readingList.push(book);
                localStorage.setItem("readingList", JSON.stringify(readingList));
            }
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
                    <AssignButton onClick={(e) => assigBook(e)}>Add Book</AssignButton>
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