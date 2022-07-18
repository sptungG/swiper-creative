import Swiper, { Navigation } from 'swiper';
/**
 * import Slicer effect module
 */
import EffectSlicer from './effect-slicer.esm';
/**
 * import Swiper styles
 */
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/virtual';
/**
 * import Slicer effect styles
 */
import './effect-slicer.scss';
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
  // pass EffectSlicer module to modules
  modules: [Navigation, EffectSlicer],
  // specify "slicer" effect
  effect: 'slicer',
  slicerEffect: {
    split: 5,
  },
  direction: 'vertical',
  speed: 600,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
