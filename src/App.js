import React from "react";
import './App.css';
import Book from './books';
import { ContextProvider } from './state/all';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Book />
      </ContextProvider>
    </div>
  );
}

export default App;
