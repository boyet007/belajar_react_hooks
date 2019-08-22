import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the winde', author: 'patrick rotfuss', id: 1 },
        { title: 'the final emperor', author: 'brandon johan', id: 2 },
    ])

    const addBook = (title, author) => {
        setBooks([ ...books, { title: title, author: author, id: uuid() }])
    } 

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    ) 
}

export default BookContextProvider