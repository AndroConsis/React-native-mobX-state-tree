import React from 'react'
import { View } from 'react-native'
import Book from './Book'

const BookList = ({ books }) => (
    <View>
        {
            books.map(book => <Book
                key={book.id}
                book={book}
            />)
        }
    </View>
)

export default BookList;
