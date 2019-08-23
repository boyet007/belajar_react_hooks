import React, { createContext,  useReducer} from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [])
 
 
    //     { title: 'name of the winde', author: 'patrick rotfuss', id: 1 },
    //     { title: 'the final emperor', author: 'brandon johan', id: 2 },
    // ])

    // const addBook = (title, author) => {
    //     setBooks([ ...books, { title: title, author: author, id: uuid() }])
    // } 

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    ) 
}

export default BookContextProvider