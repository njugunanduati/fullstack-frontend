import { BookItem } from './styles';


const Book = (props) => {
    const { books } = props;
    return books.map(book => {
        let coverPhotoURL = book.coverPhotoURL;
        return (
            <BookItem key={book.title}>
                <img src={coverPhotoURL} width={200} alt={book.title} />
                <p>Title: <b>{book.title}</b></p>
                <p>Author: {book.author}</p>
                <p>Level: {book.readingLevel}</p>
            </BookItem>
        );
    });
};

export default Book;