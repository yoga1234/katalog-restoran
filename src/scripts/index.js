import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import * as DATA from '../DATA.json';
import DATA_LOADER from './data_loader.js';

document.addEventListener('DOMContentLoaded', function() {
  const mainContainer = document.getElementById("main-container");
  const navigationWrapper = document.getElementById("navigation-wrapper");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  let dataInsert = DATA_LOADER(DATA.restaurants);

  mainContainer.insertAdjacentHTML("beforeend", dataInsert);

  hamburgerMenu.addEventListener("click", function() {
    navigationWrapper.classList.toggle("open");
  });

  document.addEventListener("click", function(e) {
    if(e.target.classList != "hamburger-menu") {
      if(navigationWrapper.classList.contains("open")) {
        navigationWrapper.classList.remove("open");
      };
    };
  });
});