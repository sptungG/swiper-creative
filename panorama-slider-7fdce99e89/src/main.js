/**
 * import Swiper and its styles
 */
import Swiper, { Pagination } from 'swiper';
import 'swiper/scss'; // eslint-disable-line
import 'swiper/scss/pagination'; // eslint-disable-line
/**
 * import main Panorama effect plugin
 */
import EffectPanorama from './effect-panorama.esm';
/**
 * import Panorama effect styles
 */
import './effect-panorama.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Init Swiper with Panorama effect
 */
const swiper = new Swiper('.panorama-slider .swiper', {
  // pass Panorama module
  modules: [Pagination, EffectPanorama],
  // enable "panorama" effect
  effect: 'panorama',
  slidesPerView: 1.5,
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  // panorama effect parameters
  panoramaEffect: {
    depth: 150,
    rotate: 45,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      panoramaEffect: {
        rotate: 35,
        depth: 150,
      },
    },
    640: {
      slidesPerView: 3,
      panoramaEffect: {
        rotate: 30,
        depth: 150,
      },
    },
    1024: {
      slidesPerView: 4,
      panoramaEffect: {
        rotate: 30,
        depth: 200,
      },
    },
    1200: {
      slidesPerView: 5,
      panoramaEffect: {
        rotate: 25,
        depth: 250,
      },
    },
  },
});
