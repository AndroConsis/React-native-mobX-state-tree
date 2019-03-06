import { createBottomTabNavigator } from 'react-navigation'

import {
    AllBooksTab,
    FictionBooksTab,
    NonfictionBooksTab,
} from '../book-type-tabs'

export default createBottomTabNavigator({
    'All Books': AllBooksTab,
    Fiction: FictionBooksTab,
    Nonfiction: NonfictionBooksTab,
})