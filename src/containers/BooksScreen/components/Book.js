import React from 'react'
import { Text } from 'react-native'

const Book = ({ book }) => (
    <Text>
        {book.title} by {book.authors[0]}
    </Text>
)

export default Book;