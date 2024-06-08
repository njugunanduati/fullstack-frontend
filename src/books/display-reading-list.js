import { useContext } from 'react';
import { BooksContext } from '../state';
import { 
    DisplayReadingListSection, BookItem,  DeleteBookButton
} from './styles';

const DisplayReadingList = () => {
    const {
        readList, setReadList
    } = useContext(BooksContext);
    const removeBook = (book) => {
        const index = readList.indexOf(book);
        readList.splice(index, 1);
        setReadList(JSON.parse(localStorage.getItem('readingList')));
        localStorage.setItem("readingList", JSON.stringify(readList));
    };

    return (
        <DisplayReadingListSection>
            {(readList.length > 0)?readList.map(book =>{
                return (
                    <BookItem key={book.id}>
                        <img src={book.coverPhotoURL} width={250} alt={book.title} />
                        <p>Title: <b>{book.title}</b></p>
                        <p>Author: {book.author}</p>
                        <p>Level: <b>{book.readingLevel}</b></p>
                        <DeleteBookButton onClick={() => removeBook(book)}>Remove</DeleteBookButton>
                    </BookItem>
                );
            }): null}
        </DisplayReadingListSection>
    )
};

export default DisplayReadingList;