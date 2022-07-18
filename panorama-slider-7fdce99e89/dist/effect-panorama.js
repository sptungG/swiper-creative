/**
 * UI Initiative Panorama Slider
 *
 * Infinite 3D panorama slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2022 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.EffectPanorama = factory());
})(this, (function () { 'use strict';

  function EffectPanorama({ swiper, extendParams, on }) {
    extendParams({
      panoramaEffect: {
        depth: 200,
        rotate: 30,
      },
    });

    on('beforeInit', () => {
      if (swiper.params.effect !== 'panorama') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}panorama`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        watchSlidesProgress: true,
      };
      Object.assign(swiper.params, overwriteParams);
      Object.assign(swiper.originalParams, overwriteParams);
    });

    on('progress', () => {
      if (swiper.params.effect !== 'panorama') return;
      const sizesGrid = swiper.slidesSizesGrid;
      const { depth = 200, rotate = 30 } = swiper.params.panoramaEffect;
      const angleRad = (rotate * Math.PI) / 180;
      const halfAngleRad = angleRad / 2;
      const angleModifier = 1 / (180 / rotate);

      for (let i = 0; i < swiper.slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const slideProgress = slideEl.progress;
        const slideSize = sizesGrid[i];
        const progressModifier = swiper.params.centeredSlides
          ? 0
          : (swiper.params.slidesPerView - 1) * 0.5;
        const modifiedProgress = slideProgress + progressModifier;
        const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI);
        const translateX = `${modifiedProgress * (slideSize / 3) * angleCos}px`;
        const rotateY = modifiedProgress * rotate;
        const radius = (slideSize * 0.5) / Math.sin(halfAngleRad);
        const translateZ = `${radius * angleCos - depth}px`;
        slideEl.style.transform =
          swiper.params.direction === 'horizontal'
            ? `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
            : `translateY(${translateX}) translateZ(${translateZ}) rotateX(${-rotateY}deg)`;
      }
    });

    on('setTransition', (s, duration) => {
      if (swiper.params.effect !== 'panorama') return;
      swiper.slides.forEach((slideEl) => {
        // eslint-disable-next-line
        slideEl.style.transition = `${duration}ms`;
      });
    });
  }

  return EffectPanorama;

}));
//# sourceMappingURL=effect-panorama.js.map
