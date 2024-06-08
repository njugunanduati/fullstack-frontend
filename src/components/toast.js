import Snackbar from '@mui/material/Snackbar';

export const Toast = (props) => {
    const { openToast,  handleClose, book } = props
    console.log('am here');
    const vertical = 'top';
    const horizontal = 'right';
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openToast}
            onClose={handleClose()}
            message={`${book.title} has been added to the list`}
            key={vertical + horizontal}
        />
    )

};