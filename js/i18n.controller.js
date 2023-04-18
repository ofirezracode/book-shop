'use strict'

const PAGINATION_BACK = 'https://cdn-icons-png.flaticon.com/512/2732/2732652.png'
const PAGINATION_NEXT = 'https://cdn-icons-png.flaticon.com/512/9126/9126127.png'

let isLanguagesMenuOpen = false

function doTrans() {
  const els = document.querySelectorAll('[data-trans]')
  els.forEach((el) => {
    const transKey = el.dataset.trans
    const transTxt = getTrans(transKey)
    if (el.placeholder) el.placeholder = transTxt
    else el.innerText = transTxt
  })
}

function onLocalizationMenuClick() {
  const elLanguagesMenu = document.querySelector('.lanuages')
  elLanguagesMenu.classList.toggle('hidden')
}

function changeLocale(locale) {
  if (isCurrLocale(locale)) return

  updateLocale(locale)
  formatPage(locale)

  doTrans()
  setQueryStringParams()
}

function formatPage(locale) {
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

  formatTablePrices()
  formatModalPrices()
  formatFilterPrice()
}

function formatTablePrices() {
  const books = getBooks()
  const tableContentHtml = generateTableHTMLContent(books)
  const elTableBody = document.querySelector('.books-table-body')

  elTableBody.innerHTML = tableContentHtml
}

function formatModalPrices(price) {
  if (isNaN(price)) {
    const book = getgCurrentlyReadBook()
    if (book) {
      price = getgCurrentlyReadBook().price
    } else {
      return
    }
  }
  let modalPrice = formatCurrencyNumber(price)
  document.querySelector('.book-price').innerText = modalPrice
}

function formatFilterPrice() {
  const elMaxPriceSlider = document.querySelector('.max-price-slider')
  const elCurrMaxPrice = document.querySelector('.curr-max-price')
  elCurrMaxPrice.innerText = formatCurrencyNumber(elMaxPriceSlider.value)
}
