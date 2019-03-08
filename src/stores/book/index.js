import { types as t, flow, getEnv } from 'mobx-state-tree';
import bookApi from './api';

let store = null;

const Book = t.model('Book', {
    id: t.identifier,
    title: t.string,
    pageCount: t.maybe(t.number),
    authors: t.array(t.string),
    image: t.maybe(t.string),
    genre: t.maybe(t.string),
    inStock: t.optional(t.boolean, true)
})

export const BookStore = t
    .model('BookStore', {
        books: t.array(Book)
    })
    .views(self => ({
        get api() {
            return getEnv(self).api
        }
    }))
    .actions(self => {
        function updateBooks(books) {
            books.data.items.forEach(book => {
                self.books.push({
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publisher: book.volumeInfo.publisher,
                    image: book.volumeInfo.imageLinks ?
                        book.volumeInfo.imageLinks.smallThumbnail : undefined
                })
            })
        }

        const loadBooks = flow(function* loadBooks() {
            const books = yield self.api.fetchBooks()
            updateBooks(books)
        })

        return {
            loadBooks,
        }
    })

export default (api = bookApi) => {
    if (store) return store

    store = BookStore.create({ books: [] }, { api })
    return store;
}
