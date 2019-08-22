import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title, author)
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} 
                placeholder="book title" required/>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} 
                placeholder="book author" required/>
                <input type="submit" value="add book"/>
        </form>
    )
}

export default NewBookForm