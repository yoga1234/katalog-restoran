import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import * as DATA from '../DATA.json';
import DATA_LOADER from './data_loader.js';

document.addEventListener('DOMContentLoaded', function() {
  let mainContainer = document.getElementById("main-container");
  let dataInsert = DATA_LOADER(DATA.restaurants);
  mainContainer.insertAdjacentHTML("beforeend", dataInsert);
})