import { 
    BookItem, AssignButton, BookSearchResultsSection, BookImageSection, 
    BookDescriptionSection, BookButtonSection, DeleteBookButton
} from './styles';

const DisplayReadingList = () => {
    const readingList = JSON.parse(localStorage.getItem('readingList'));
    const removeBook = (book) => {
        const index = readingList.indexOf(book);
        readingList.splice(index, 1);
    };
    return (
        <div>
            {readingList.map(book =>{
                return (
                    <BookItem key={book.id}>
                        <img src={book.coverPhotoURL} width={250} alt={book.title} />
                        <p>Title: <b>{book.title}</b></p>
                        <p>Author: {book.author}</p>
                        <p>Level: <b>{book.readingLevel}</b></p>
                        <DeleteBookButton onClick={() => removeBook(book)}>Delete</DeleteBookButton>
                    </BookItem>
                );
            })}
        </div>
    )
};

export default DisplayReadingList;