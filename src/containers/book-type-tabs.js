import React from 'react'
import { View } from 'react-native'
import BookListView from './BooksScreen/components/BookListView';

export const AllBooksTab = ({ navigation }) => (
    <View style={{flex: 1, backgroundColor: "#F5f5f5"}}>
        <BookListView />
    </View>
)

export const FictionBooksTab = () => (
    <View>
    </View>
)

export const NonfictionBooksTab = () => (
    <View>
    </View>
)