import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {Button, TextField } from '@mui/material';


export const MainContainer = styled(Container)({
      backgroundColor: 'white',
      fontFamily: 'Mullish-Medium',
      paddingLeft: 0,
      paddingRight: 0,
      margin: 'auto',
});

export const HeaderSection = styled('div')({
      color: '#5ACCCC !important',
});

export const SearchSection = styled('div')({
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
});

export const BooksSection = styled('div')({
      display:'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
});

export const BookPaper = styled('div')({
      p: '2px 4px', 
      display: 'flex', 
      alignItems: 'center'
});

export const SearchContainer = styled('div')({
      p: '2px 4px', 
      display: 'flex', 
      alignItems: 'center', 
      width: 400,
      paddingBottom: 20,
      marginBottom: 10
});

export const InputSection = styled('div')({
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
});

export const TextSearchField = styled(TextField)({
      width: 400,
      height: 0.5,
      fontSize: 12
});

export const ButtonSection = styled('div')({
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
});

export const ButtonSearch = styled(Button)({
      backgroundColor: '#335C6E',
      color: '#fff',
      borderRadius: 15,
      fontSize: 18,
      fontWeight: 600,
      marginTop: 10,
});

export const BookItem = styled('div')({
      width: 200,
});

export const AssignButton = styled(Button)({
      backgroundColor: '#28B8B8',
      color: '#FFFFFF',
      borderRadius: 2.5,
      fontSize: 12,
      fontWeight: 600,
      marginTop: 10,
      marginBottom: 10,
});

export const  BookSearchResultsSection = styled('div')({
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      alignItems: 'space-around',
      padding: 20,
      width: '100%',
});
export const BookImageSection = styled('div')({
      width: 200,
});
export const BookDescriptionSection = styled('div')({
      width: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
});
export const BookButtonSection = styled('div')({
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
});

export const DeleteBookButton = styled(Button)({
      backgroundColor: '#28B8B8',
      color: '#FFFFFF',
      borderRadius: 2.5,
      fontSize: 12,
      fontWeight: 600,
      marginTop: 10,
      marginBottom: 10,
});

export const PaginationSection = styled('div')({
      paddingTop: 20,
});

export const FooterSection = styled('div')({});