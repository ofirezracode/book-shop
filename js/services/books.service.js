'use strict'

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
const STORAGE_KEY = 'booksDB'
const PAGE_SIZE = 8
const gFilterBy = { name: '', maxPrice: Infinity, rate: 0 }

let gMaxBookPrice = 0
let gPageIdx = 0
let gPagesAmount = 0

let gBooks = []

_createBooks()

function _createBooks() {
  let books = loadFromStorage(STORAGE_KEY)
  if (!books || !books.length) {
    books = []
    for (let i = 0; i < BOOKS.length; i++) {
      books.push(_createBook(BOOKS[i].name, getRandomIntInclusive(10, 151), BOOKS[i].description, BOOKS[i].imgUrl))
    }
  }
  gBooks = books
  _saveBooksToStorage()
}

function _createBook(name, price, desc = makeLorem(), imgUrl = DEFAULT_IMG, rate = getRandomIntInclusive(0, 10)) {
  return {
    id: makeId(),
    name,
    price,
    desc,
    imgUrl,
    rate,
  }
}

function getBooks() {
  const books = gBooks.filter(
    (book) =>
      book.name.toLowerCase().includes(gFilterBy.name.toLowerCase()) && book.price <= gFilterBy.maxPrice && book.rate >= gFilterBy.rate
  )
  gPagesAmount = Math.ceil(books.length / PAGE_SIZE)
  const startIdx = gPageIdx > gPagesAmount ? 0 : gPageIdx * PAGE_SIZE
  return books.slice(startIdx, startIdx + PAGE_SIZE)
}

function deleteBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => bookId === book.id)
  gBooks.splice(bookIdx, 1)
  _saveBooksToStorage()
}

function addBook(name, price) {
  const book = _createBook(name, price)
  gBooks.unshift(book)
  _saveBooksToStorage()
  return book
}

function getBookById(bookId) {
  const book = gBooks.find((book) => bookId === book.id)
  return book
}

function updateBook(bookId, newValues) {
  const book = gBooks.find((book) => book.id === bookId)
  for (let property in newValues) {
    book[property] = newValues[property]
  }
  _saveBooksToStorage()
  return book
}

function setBookFilter(filterBy) {
  if (filterBy.name !== undefined) gFilterBy.name = filterBy.name
  if (filterBy.maxPrice !== undefined) gFilterBy.maxPrice = +filterBy.maxPrice
  if (filterBy.rate !== undefined) gFilterBy.rate = +filterBy.rate
  return gFilterBy
}

function setBookSort(sortBy = {}) {
  if (sortBy.price !== undefined) {
    gBooks.sort((book1, book2) => (book1.price - book2.price) * sortBy.price)
  } else if (sortBy.name !== undefined) {
    gBooks.sort((book1, book2) => book1.name.localeCompare(book2.name) * sortBy.name)
  }
}

function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks)
}

function getMaxBookPrice() {
  gMaxBookPrice = gBooks.reduce((acc, book) => (book.price > acc ? book.price : acc), 0)
  return gMaxBookPrice
}

function getQueryStringParams() {
  return `?name=${gFilterBy.name}&maxPrice=${gFilterBy.maxPrice}&rate=${gFilterBy.rate}`
}

function changePage(change) {
  let pageChanged = true
  if (change.direction && gPageIdx + change.direction < gPagesAmount && gPageIdx + change.direction >= 0) {
    gPageIdx += change.direction
  } else if (!isNaN(change.setPage) && change.setPage < gPagesAmount && change.setPage >= 0) {
    gPageIdx = change.setPage
  } else {
    pageChanged = false
  }
  const temp = {
    pageChanged,
    currPage: gPageIdx,
    pages: [gPageIdx - 1 < 0 ? null : gPageIdx - 1, gPageIdx, gPageIdx + 1 < gPagesAmount ? gPageIdx + 1 : null],
  }
  return temp
}
