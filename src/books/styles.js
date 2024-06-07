import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { FormGroup, TextField, Button } from '@mui/material';

import Paper from '@mui/material/Paper';


export const MainContainer = styled(Container)`
      background-color: ${props => props.background || 'transparent'},
      height: 'max-content',
      width: 'max-content',
      overflow: "hidden"
`;

export const Heading = styled('div')`
      color: '#5ACCCC',
`;

export const SearchContainer = styled('div')`
display:flex,
flex-direction: column,
justify-content: center,
align-items: center,
`;
export const BooksContainer = styled('div')``;

export const FormGroupContainer = styled(FormGroup)`
    display:flex,
    flex-direction: column
    justify-content: center,
    align-items: center,
`;

export const TextSearchField = styled(TextField)`
      width: 400px,
`;

export const ButtonSearch = styled(Button)`
      background-color: '#fff',
      color: '#1A2027',
      border: '1px solid #1A2027',
      border-radius: 2.5px,
      padding: 5px 10px,
      font-size: 12px,
      font-weight: 600,
      margin-top: 10px,
`;

export const TextFieldArea = styled('div')`
width: 400px !important;,
`;
export const ButtonFieldArea = styled('div')`
width: 400px !important,
`;

export const BookItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const AssignButton = styled(Button)`
      background-color: '#fff',
      color: '#1A2027',
      border: '1px solid #1A2027',
      border-radius: 2.5px,
      padding: 5px 10px,
      font-size: 12px,
      font-weight: 600,
      margin-top: 10px,
      margin-bottom: 10px,
`;

export const PaginationContainer = styled('div')`
      padding-top: 20px !important,
`;