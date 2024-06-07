import React from "react";
import './App.css';
import Book from './books';
import { ContextProvider } from './state/all';


function App() {
  const date = new Date();
  const author = 'James Njuguna Nduati';
  const email = 'njuguna@gmail.com';
  return (
    <div className="App">
      <ContextProvider>
        <Book />
        <section>{date.getFullYear()}</section>
      </ContextProvider>
    </div>
  );
}

export default App;
