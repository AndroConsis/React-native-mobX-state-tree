import React, { Component } from 'react';
import BookStore from '../../../stores/book';
import BookList from './BookList';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

@observer
class BookListView extends Component {
    async componentWillMount() {
        this.store = BookStore();
        await this.store.loadBooks();
    }

    render() {
        console.log(this.store.books.toJS());
        return <BookList books={this.store.books} />
    }
}

export default BookListView;