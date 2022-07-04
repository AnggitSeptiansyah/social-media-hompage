// Sidebar
const menuItems = document.querySelectorAll('.menu-item')
const messageNotification = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

// Theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

// Remove active class from menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active')
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active')
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none'
    } else {
      document.querySelector('.notification-popup').style.display = 'block'
      document.querySelector('#notifications .notification-number').style.display = 'none'
    }
  })
})

messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--primary-color)'
  messageNotification.querySelector('.notification-number').style.display = 'none'
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000)
})

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase()
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase()
    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex'
    } else {
      chat.style.display = 'none'
    }
  })
}

messageSearch.addEventListener('keyup', searchMessage)

// theme customization
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

// close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)