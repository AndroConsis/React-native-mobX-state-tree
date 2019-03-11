import { BookStore } from '../index'
import api from '../mock-api/api'

const store = BookStore.create({ books: [] }, { api })

it('bookstore fetches data', async () => {
  await store.loadBooks()
  expect(store.books.length).toBe(10)
})

it('filter is set when setGenre() is called with a valid filter value',
  async () => {
    store.setGenre('Nonfiction');
    expect(store.filter).toBe('Nonfiction');
  })

it('filter is NOT set when setGenre() is called with an invalid filter value',
  async () => {
  expect(() => store.setGenre('Adventure')).toThrow()
  })

it('Books are sorted by title', async () => {
  const books = store.sortedBooks
  expect(books[0].title).toBe('Katie and the Mustang')
  expect(books[1].title).toBe('Providence River and Harbor Maintenance Dredging Project')
})

it(`Books are sorted by title`, async () => {
  store.setGenre('Nonfiction')
  const books = store.sortedBooks
  expect(books.length).toBe(7)
})