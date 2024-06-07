import { Box, Pagination } from '@mui/material';

const Paginate = (props) => {
    const { booksPerPage, totalBooks, paginate } = props;
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalBooks/booksPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <Box>
                <Pagination count={pageNumbers.length} onChange={(e, p) => paginate(p)} />
            </Box>
        </nav>
    )
}

export default Paginate;