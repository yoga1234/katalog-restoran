import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import * as DATA from '../DATA.json'
import DATA_LOADER from './data_loader.js'

import hamburgerMenuInitiator from './utils/hamburger-menu-initiator'

document.addEventListener('DOMContentLoaded', function () {
  const mainContainer = document.getElementById('main-container')
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const skipToContent = document.querySelector('.skip-to-content')
  const sectionHeader = document.querySelector('.section-header')
  const dataInsert = DATA_LOADER(DATA.restaurants)

  mainContainer.insertAdjacentHTML('beforeend', dataInsert)

  skipToContent.addEventListener('keypress', function () {
    console.log(sectionHeader)
    sectionHeader.focus()
  })

  hamburgerMenuInitiator({ hamburgerMenu, navigationWrapper })
})
