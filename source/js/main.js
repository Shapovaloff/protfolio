// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';

import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/modals/init-modals';
import initAccordion from './modules/accordion';
import scrollToElement from './modules/scroll-to-element';
import smoothscroll from './vendor/smoothscroll.js';
import initToggleMenu from './modules/toggle-menu';
import portfolioFilter from './modules/portfolio-filter';
import initCardView from './modules/card-view';
import selectCustom from './modules/custom-select';
import experienceCount from './modules/experience-count.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  iosVhFix();
  experienceCount();
  initAccordion();
  initToggleMenu();
  selectCustom.init();
  initModals();
  portfolioFilter();
  scrollToElement();
  initCardView();
  smoothscroll.polyfill();



  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.

