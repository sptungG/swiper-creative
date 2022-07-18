/**
 * UI Initiative Carousel Slider
 *
 * Infinite 3D carousel slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2022 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 */

!(function (e, s) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = s())
    : 'function' == typeof define && define.amd
    ? define(s)
    : ((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).EffectCarousel = s());
})(this, function () {
  'use strict';
  return function ({ swiper: e, on: s }) {
    s('beforeInit', () => {
      if ('carousel' !== e.params.effect) return;
      e.classNames.push(`${e.params.containerModifierClass}carousel`);
      const s = { watchSlidesProgress: !0, centeredSlides: !0 };
      Object.assign(e.params, s), Object.assign(e.originalParams, s);
    }),
      s('progress', () => {
        if ('carousel' !== e.params.effect) return;
        const s = e.slides.length;
        for (let t = 0; t < e.slides.length; t += 1) {
          const a = e.slides[t],
            r = e.slides[t].progress,
            o = Math.abs(r);
          let i = 1;
          o > 1 && (i = 0.3 * (o - 1) + 1);
          const n = a.querySelectorAll('.swiper-carousel-animate-opacity'),
            l = r * i * 50 + '%',
            c = 1 - 0.2 * o,
            f = s - Math.abs(Math.round(r));
          (a.style.transform = `translateX(${l}) scale(${c})`),
            (a.style.zIndex = f),
            (a.style.opacity = o > 3 ? 0 : 1),
            n.forEach((e) => {
              e.style.opacity = 1 - o / 3;
            });
        }
      }),
      s('setTransition', (s, t) => {
        if ('carousel' === e.params.effect)
          for (let s = 0; s < e.slides.length; s += 1) {
            const a = e.slides[s],
              r = a.querySelectorAll('.swiper-carousel-animate-opacity');
            (a.style.transitionDuration = `${t}ms`),
              r.forEach((e) => {
                e.style.transitionDuration = `${t}ms`;
              });
          }
      });
  };
});
//# sourceMappingURL=effect-carousel.min.js.map
