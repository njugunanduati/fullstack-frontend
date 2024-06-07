import { BookItem, AssignButton } from './styles';

const SearchResult = (props) => {
    const { book } = props;

    const assigBook = (e) => {
        e.preventDefault();
        console.log(book);
    };
    if (book) {
        return (
            <BookItem key={book.title}>
                <img src={book.coverPhotoURL} width={250} alt={book.title} />
                <p>Title: <b>{book.title}</b></p>
                <p>Author: {book.author}</p>
                <p>Level: <b>{book.readingLevel}</b></p>
                <AssignButton onClick={(e) => assigBook(e)}>Assign Book</AssignButton>
            </BookItem>
        );
    }
};

export default SearchResult;