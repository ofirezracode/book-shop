'use strict'

const gTrans = {
  'page-header': {
    en: "Bookie's Books",
    he: 'הספרים של ספר',
  },
  'create-new-book': {
    en: 'Create a new book',
    he: 'צור ספר חדש',
  },
  'search-book': {
    en: 'Search for a book...',
    he: 'חפש ספר',
  },
  'book-rate': {
    en: 'Minimum Rate',
    he: 'דירוג מזערי',
  },
  'book-price': {
    en: 'Max Price',
    he: 'מחיר מרבי',
  },
  id: {
    en: 'ID',
    he: 'מס"ד',
  },
  title: {
    en: 'Title',
    he: 'כותרת',
  },
  price: {
    en: 'Price',
    he: 'מחיר',
  },
  actions: {
    en: 'Actions',
    he: 'פעולות',
  },
  'book-read': {
    en: 'Read',
    he: 'קרא',
  },
  'book-update': {
    en: 'Update',
    he: 'עדכן',
  },
  'book-delete': {
    en: 'Delete',
    he: 'מחק',
  },
  'modal-close': {
    en: 'Close',
    he: 'סגור',
  },
}

const locales = [
  { lang: 'en', isRtl: false, currency: 'USD', localeFormat: 'en-US' },
  { lang: 'he', isRtl: true, currency: 'ILS', localeFormat: 'he-IL' },
]

let gCurrLocale = locales[0]

function getTrans(transKey) {
  const transMap = gTrans[transKey]
  if (!transMap) return 'UNKNOWN'
  let transTxt = transMap[gCurrLocale.lang]
  if (!transTxt) transTxt = transMap.en
  return transTxt
}

function getLang() {
  return gCurrLocale.lang
}

function updateLocale(locale) {
  gCurrLocale = locales.find((loc) => locale === loc.lang)
}

function isCurrLocale(locale) {
  return locale === gCurrLocale.lang
}

function isRtl(locale) {
  console.log('locale', locale)
  return locales.find((loc) => locale === loc.lang).isRtl
}

function formatCurrencyNumber(num) {
  if (gCurrLocale.currency === 'ILS') num = convertShekelToDollar(num)
  const formatter = new Intl.NumberFormat(gCurrLocale.localeFormat, {
    style: 'currency',
    currency: gCurrLocale.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formatter.format(num)
}

function convertShekelToDollar(num) {
  return num * 3.65
}
