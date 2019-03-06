import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from "react-navigation";

import BooksScreen from './BooksScreen';
import AuthorsScreen from './AuthorScreen';

export const BookStack = createStackNavigator({
    Books: {
        screen: BooksScreen
    }
});

export const AuthorStack = createStackNavigator({
    Authors: {
        screen: AuthorsScreen
    }
})

const AppNavigator = createDrawerNavigator({
    Books: {
        screen: BookStack
    },
    Authors: {
        screen: AuthorStack
    }
})

export default createAppContainer(AppNavigator);