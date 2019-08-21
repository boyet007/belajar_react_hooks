import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
       
    </div>
  )
}

export default App;
