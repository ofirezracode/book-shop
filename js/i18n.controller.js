'use strict'

const PAGINATION_BACK = 'https://cdn-icons-png.flaticon.com/512/2732/2732652.png'
const PAGINATION_NEXT = 'https://cdn-icons-png.flaticon.com/512/9126/9126127.png'

let isLanguagesMenuOpen = false

function onLocalizationMenuClick() {
  const elLanguagesMenu = document.querySelector('.lanuages')
  elLanguagesMenu.classList.toggle('hidden')
}

function onLocaleClick(locale) {
  if (isCurrLocale(locale)) return

  updateLocale(locale)
  if (isRtl(locale)) {
    document.body.classList.add('rtl')
    const elPagBack = document.querySelector('.pagination-icon-back')
    const elPagNext = document.querySelector('.pagination-icon-next')
    elPagBack.src = PAGINATION_NEXT
    elPagNext.src = PAGINATION_BACK
  } else {
    document.body.classList.remove('rtl')
    const elPagBack = document.querySelector('.pagination-icon-back')
    const elPagNext = document.querySelector('.pagination-icon-next')
    elPagBack.src = PAGINATION_BACK
    elPagNext.src = PAGINATION_NEXT
  }
  // render()
  formatPrices()
  doTrans()
}

function formatPrices() {
  const books = getBooks()
  const tableContentHtml = generateTableHTMLContent(books)
  const elTableBody = document.querySelector('.books-table-body')

  elTableBody.innerHTML = tableContentHtml
}
