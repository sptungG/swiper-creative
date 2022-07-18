import Swiper, { Parallax, Navigation, Pagination } from 'swiper';
/**
 * import Shutters Slider module
 */
import EffectShutters from './effect-shutters.esm.js';

import 'swiper/scss';
import 'swiper/scss/parallax';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
/**
 * import Shutters Slider styles
 */
import './effect-shutters.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Create Swiper
 */
const swiper = new Swiper('.swiper', {
  // pass EffectShutters to modules
  modules: [Navigation, Pagination, Parallax, EffectShutters],
  // enable "shutters" effect
  effect: 'shutters',
  // shutters effect parameters
  shuttersEffect: {
    split: 5,
  },
  speed: 900,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
window.swiper = swiper;
