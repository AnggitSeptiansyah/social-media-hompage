// Sidebar
const menuItems = document.querySelectorAll('.menu-item')
const messageNotification = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPallete = document.querySelectorAll('.choose-color span')

const lightBackground = document.querySelector('.bg-1')
const dimBackground = document.querySelector('.bg-2')
const darkBackground = document.querySelector('.bg-3')




// Remove active class from menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active')
  })
}

/*
* Mengubah active class
* Popup Notifikasi
*/
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

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

// Font Size
fontSizes.forEach(size => {

  size.addEventListener('click', () => {

    removeSizeSelector()
    let fontSize;
    size.classList.toggle('active')

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px'
      root.style.setProperty('----sticky-top-left', '-10rem')
      root.style.setProperty('----sticky-top-right', '-33rem')
    }

    // Change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize
  })

})

const changeActiveColor = () => {
  colorPallete.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}

colorPallete.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColor();

    if (color.classList.contains('color-1')) {
      primaryHue = 252

    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202
    }

    color.classList.add('active')
    root.style.setProperty('--hue-primary-color', primaryHue)
  })
})

// Change Background
let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBackground = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

lightBackground.addEventListener('click', () => {
  lightBackground.add('active')
  dimBackground.classList.remove('active')
  darkBackground.classList.remove('active')
  window.location.reload()
})

dimBackground.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '20%'
  lightColorLightness = '15%'

  // Add active class
  dimBackground.classList.add('active')
  lightBackground.classList.remove('active')
  darkBackground.classList.remove('active')

  changeBackground()
})

darkBackground.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '10%'
  lightColorLightness = '0%'

  darkBackground.classList.add('active')
  lightBackground.classList.remove('active')
  dimBackground.classList.remove('active')
  changeBackground();
})