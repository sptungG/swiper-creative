/**
 * UI Initiative Shutters Slider
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

export default function EffectShutters({ swiper, extendParams, on }) {
  extendParams({
    shuttersEffect: {
      split: 5,
    },
  });

  const createImages = () => {
    swiper.slides.each((slideEl) => {
      const imageEl = slideEl.querySelector('.swiper-shutters-image');
      if (!imageEl) return;
      const nextEl = imageEl.nextElementSibling;
      const cloneContainerEl = document.createElement('div');
      cloneContainerEl.classList.add('swiper-shutters-image-clones');
      for (let i = 0; i < swiper.params.shuttersEffect.split; i += 1) {
        const div = document.createElement('div');
        div.classList.add('swiper-shutters-image-clone');
        div.appendChild(imageEl.cloneNode());
        cloneContainerEl.appendChild(div);
      }
      if (nextEl) {
        imageEl.parentNode.insertBefore(cloneContainerEl, nextEl);
      } else {
        imageEl.parentNode.appendChild(cloneContainerEl);
      }
    });
  };

  const setImages = () => {
    swiper.el.querySelectorAll('.swiper-shutters-image').forEach((imageEl) => {
      imageEl.style.width = `${swiper.width}px`;
      imageEl.style.height = `${swiper.height}px`;
    });
    swiper.el.querySelectorAll('.swiper-slide').forEach((slideEl) => {
      slideEl
        .querySelectorAll('.swiper-shutters-image-clone')
        .forEach((cloneEl, cloneElIndex) => {
          const percentagePerItem = 100 / swiper.params.shuttersEffect.split;
          const cloneImg = cloneEl.querySelector('.swiper-shutters-image');
          if (swiper.params.direction === 'vertical') {
            cloneEl.style.height = `${
              100 / swiper.params.shuttersEffect.split
            }%`;
            cloneEl.style.top = `${
              (100 / swiper.params.shuttersEffect.split) * cloneElIndex
            }%`;
            cloneImg.style.top = `-${100 * cloneElIndex}%`;
          } else {
            cloneEl.style.width = `${
              100 / swiper.params.shuttersEffect.split
            }%`;
            cloneEl.style.left = `${
              (100 / swiper.params.shuttersEffect.split) * cloneElIndex
            }%`;
            cloneImg.style.left = `-${100 * cloneElIndex}%`;
          }

          cloneImg.setAttribute('data-swiper-parallax', '10%');

          cloneEl.setAttribute(
            'data-swiper-parallax',
            `${
              percentagePerItem *
              (cloneElIndex + 1) *
              (cloneElIndex % 2 === 0 ? 0.5 : -1)
            }%`,
          );
        });
    });
  };

  on('beforeInit', () => {
    if (swiper.params.effect !== 'shutters') return;

    swiper.classNames.push('swiper-shutters');

    const overwriteParams = {
      watchSlidesProgress: true,
      parallax: { enabled: true },
    };

    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });
  on('init', () => {
    if (swiper.params.effect !== 'shutters') return;
    createImages();
  });

  on('resize init', () => {
    if (swiper.params.effect !== 'shutters') return;
    setImages();
  });
}
