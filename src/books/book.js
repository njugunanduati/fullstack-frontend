import Paper from '@mui/material/Paper';
import { BookItem } from './styles';


const Book = (props) => {
    const { books } = props;
    return books.map(book => {
        let coverPhotoURL = book.coverPhotoURL;
        return (
            <Paper sx={{ p: '2px 0px', m: '0px 0px 10px', display: 'flex', alignItems: 'center' }}>
                <BookItem key={book.title}>
                    <img src={coverPhotoURL} width={200} alt={book.title} />
                    <p style={{ color: "#335C6E" }}><b>{book.title}</b></p>
                    <p style={{ color: "#335C6E" }}>Author: <b>{book.author}</b></p>
                    <p style={{ color: "#FAAD00" }}>Level: {book.readingLevel}</p>
                </BookItem>
            </Paper>
        );
    });
};

export default Book;