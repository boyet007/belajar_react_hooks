import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div>
                <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                    <ul>
                        <li style={{ background: theme.ui }}>the way of kings</li>
                        <li style={{ background: theme.ui }}>the name of the winds</li>
                        <li style={{ background: theme.ui }}>the final empoire</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookList