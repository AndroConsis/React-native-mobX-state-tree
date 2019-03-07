import { types as t, flow } from 'mobx-state-tree';
import api from './api';

let store = null;

const Book = t.model('Book', {
    id: t.identifier,
    title: t.string,
    pageCount: t.maybe(t.number),
    authors: t.array(t.string),
    image: t.string,
    genre: t.maybe(t.string),
    inStock: t.optional(t.boolean, true)
})

const BookStore = t
    .model('BookStore', {
        books: t.array(Book)
    })
    .actions(self => {
        function updateBooks(books) {
            books.data.items.forEach(book => {
                self.books.push({
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publisher: book.volumeInfo.publisher,
                    image: book.volumeInfo.imageLinks.smallThumbnail || null
                })
            })
        }

        const loadBooks = flow(function* loadBooks() {
            const books = yield api.fetchBooks()
            updateBooks(books)
        })

        return {
            loadBooks,
        }
    })

export default () => {
    if (store) return store

    store = BookStore.create({ books: [] })

    return store;
}
