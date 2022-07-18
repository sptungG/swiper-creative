import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
/**
 * import Carousel effect module
 */
import EffectCarousel from './effect-carousel.esm';
/**
 * import Swiper styles
 */
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/virtual';
/**
 * import Carousel effect styles
 */
import './effect-carousel.scss';
/**
 * Custom local styles
 */
import './main.scss';
/**
 * Init Swiper
 *
 */
// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // pass EffectCarousel module to modules
  modules: [Autoplay, Navigation, Pagination, EffectCarousel],
  // specify "carousel" effect
  effect: 'carousel',
  grabCursor: true,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
  },
});
