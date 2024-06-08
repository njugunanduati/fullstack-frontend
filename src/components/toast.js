import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';

export const Toast = (props) => {
    const { openToast,  handleClose, book } = props
    const vertical = 'top';
    const horizontal = 'right';
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={5000}
            open={openToast}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <SnackbarContent sx={{ backgroundColor: '#F76434', color: '#FFFFFF' }}
                message={`${book.title} has been added to the list`}
            />
        </Snackbar>
    )

};