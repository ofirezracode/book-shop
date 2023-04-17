'use strict'

let currentlyReadBook

function onInit() {
  renderFilterByQueryStringParams()
  renderMaxPriceFilter()
  renderBooksTable()
  initPagination()
}

function renderBooksTable() {
  const headers = [
    { text: 'ID', trans: 'id' },
    { text: 'Title', trans: 'title' },
    { text: 'Price', trans: 'price' },
    { text: 'Actions', trans: 'actions' },
  ]
  let tableHTML = ''

  // Add table headers
  tableHTML += '<thead><tr class="table-header">'
  headers.forEach(
    (header, i) => (tableHTML += `<th data-trans="${header.trans}" ${i === headers.length - 1 ? 'colspan="3"' : ''}>${header.text}</th>`)
  )
  tableHTML += '</tr></thead>'

  const books = getBooks()

  // Add table body
  tableHTML += '<tbody class="books-table-body">'

  tableHTML += generateTableHTMLContent(books)

  tableHTML += '</tbody>'

  const elTableContainer = document.querySelector('.books-table-container')
  elTableContainer.innerHTML = tableHTML
}

function renderPagination(pagination) {
  let paginationHTML = ''

  paginationHTML = pagination.pages
    .map((page) => {
      if (page !== null) {
        return `<button onclick='onPageChange({setPage:${page}})' class="pagination-btn">${page + 1}</button>`
      }
    })
    .join('')
  const elPaginationPages = document.querySelector('.pagination-pages')
  elPaginationPages.innerHTML = paginationHTML

  const elPaginationBtnBack = document.querySelector('.pagination-back')
  elPaginationBtnBack.disabled = pagination.pages[0] === null
  const elPaginationBtnNext = document.querySelector('.pagination-next')
  elPaginationBtnNext.disabled = pagination.pages[2] === null
}

function generateTableHTMLContent(books) {
  return books
    .map(
      (book) =>
        `<tr class='table-row'>
    <td><p>${book.id}</p></td>
    <td class='text-align-start'><p>${book.name}</p></td>
    <td><p data-currency>${formatCurrencyNumber(book.price)}</p></td>
    <td><button data-trans="book-read" onclick='onReadBook("${book.id}")' class='book-button btn-read'>Read</button></td>
    <td><button data-trans="book-update" onclick='onUpdateBook("${book.id}")' class='book-button btn-update'>Update</button></td>
    <td><button data-trans="book-delete" onclick='onDeleteBook("${book.id}")' class='book-button btn-delete'>Delete</button></td>
    </tr>`
    )
    .join('')
}

function onReadBook(bookId) {
  const MAX_DESCRIPTION_LENGTH = 340
  currentlyReadBook = getBookById(bookId)
  const elModalBg = document.querySelector('.modal-background')
  const elModal = document.querySelector('.modal')
  elModal.querySelector('.book-img').src = currentlyReadBook.imgUrl
  elModal.querySelector('.book-name').innerText = currentlyReadBook.name
  elModal.querySelector('.book-price').innerText = currentlyReadBook.price
  elModal.querySelector('.book-rating').innerText = currentlyReadBook.rate
  let bookDescriptionShortened = currentlyReadBook.desc
  if (bookDescriptionShortened.length > MAX_DESCRIPTION_LENGTH)
    bookDescriptionShortened = bookDescriptionShortened.slice(0, MAX_DESCRIPTION_LENGTH - 1) + '...'
  elModal.querySelector('.book-description').innerText = bookDescriptionShortened
  elModalBg.classList.remove('closed')
  elModal.classList.remove('closed')

  setQueryStringParams()
}

function renderMaxPriceFilter() {
  const elMaxPriceSlider = document.querySelector('.max-price-slider')
  const elCurrMaxPrice = document.querySelector('.curr-max-price')
  const maxBookPrice = getMaxBookPrice()
  elMaxPriceSlider.max = maxBookPrice
  elCurrMaxPrice.innerText = elMaxPriceSlider.value
}

function onDeleteBook(bookId) {
  deleteBook(bookId)
  renderBooksTable()
  renderMaxPriceFilter()
  // flashMsg(`Book Deleted`)
}

function onAddBook() {
  const name = prompt('Book name:')
  const price = +prompt('Book price:')

  if (name && name.trim().length > 0 && !isNaN(price) && price >= 0) {
    const book = addBook(name, price)
    renderBooksTable()
    renderMaxPriceFilter()
    // flashMsg(`Book Added (id: ${book.id})`)
  }
}

function onUpdateBook(bookId) {
  const price = +prompt('Book price:')
  if (!isNaN(price) && price >= 0) {
    updateBook(bookId, { price })
    renderBooksTable()
    renderMaxPriceFilter()
    // flashMsg(`Book Added (id: ${book.id})`)
  }
}

function onUpdateBookRating(rate) {
  if (currentlyReadBook.rate + rate > 10 || currentlyReadBook.rate + rate < 0) return
  updateBook(currentlyReadBook.id, { rate: currentlyReadBook.rate + rate })
  const elBookRating = document.querySelector('.book-rating')
  elBookRating.innerText = currentlyReadBook.rate
}

function onSetFilterBy(filterBy) {
  filterBy = setBookFilter(filterBy)
  setQueryStringParams()
  renderMaxPriceFilter()
  renderBooksTable()
  initPagination()
}

function renderFilterByQueryStringParams() {
  const queryStringParams = new URLSearchParams(window.location.search)
  const filterBy = {
    name: queryStringParams.get('name') || '',
    maxPrice: +queryStringParams.get('maxPrice') || Infinity,
    rate: +queryStringParams.get('rate') || 0,
    book: queryStringParams.get('book') || '',
  }

  if (!filterBy.name && filterBy.maxPrice === Infinity && !filterBy.rate && !filterBy.book) return

  document.querySelector('.name-input').value = filterBy.name
  document.querySelector('.max-price-slider').value = filterBy.maxPrice
  document.querySelector('#rate-filter').value = filterBy.rate
  setBookFilter(filterBy)

  if (filterBy.book) {
    onReadBook(filterBy.book)
  }
}

function onCloseModal() {
  document.querySelector('.modal-background').classList.add('closed')
  document.querySelector('.modal').classList.add('closed')
  currentlyReadBook = null
  setQueryStringParams()
}

function setQueryStringParams() {
  const queryStringParams = getQueryStringParams() + '&book=' + (currentlyReadBook ? currentlyReadBook.id : '')
  const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams
  window.history.pushState({ path: newUrl }, '', newUrl)
}

function initPagination() {
  const pagination = changePage({ setPage: 0 })
  renderPagination(pagination)
}

function onPageChange(change) {
  const pagination = changePage(change)
  if (pagination.pageChanged) {
    renderBooksTable()
    renderPagination(pagination)
  }
}
