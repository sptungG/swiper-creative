export default function EffectSlicer({ swiper, extendParams, on, emit }) {
  extendParams({
    slicerEffect: {
      split: 5,
    },
  });

  function effectVirtualTransitionEnd({ duration }) {
    const { slides, activeIndex, $wrapperEl } = swiper;
    if (duration !== 0) {
      let eventTriggered = false;
      const $transitionEndTarget = slides
        .eq(activeIndex)
        .find('.swiper-slicer-image-clone:nth-child(1)');

      $transitionEndTarget.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }

  const createImages = () => {
    swiper.slides.each((slideEl) => {
      const imageEl = slideEl.querySelector('.swiper-slicer-image');
      if (!imageEl) return;
      const nextEl = imageEl.nextElementSibling;
      const cloneContainerEl = document.createElement('div');
      cloneContainerEl.classList.add('swiper-slicer-image-clones');
      for (let i = 0; i < swiper.params.slicerEffect.split; i += 1) {
        const div = document.createElement('div');
        div.classList.add('swiper-slicer-image-clone');
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
    swiper.el.querySelectorAll('.swiper-slicer-image').forEach((imageEl) => {
      imageEl.style.width = `${swiper.width}px`;
      imageEl.style.height = `${swiper.height}px`;
    });
    swiper.el.querySelectorAll('.swiper-slide').forEach((slideEl) => {
      slideEl
        .querySelectorAll('.swiper-slicer-image-clone')
        .forEach((cloneEl, cloneElIndex) => {
          const cloneImg = cloneEl.querySelector('.swiper-slicer-image');
          if (swiper.params.direction === 'horizontal') {
            cloneEl.style.height = `${100 / swiper.params.slicerEffect.split}%`;
            cloneEl.style.top = `${
              (100 / swiper.params.slicerEffect.split) * cloneElIndex
            }%`;
            cloneImg.style.top = `-${100 * cloneElIndex}%`;
          } else {
            cloneEl.style.width = `${100 / swiper.params.slicerEffect.split}%`;
            cloneEl.style.left = `${
              (100 / swiper.params.slicerEffect.split) * cloneElIndex
            }%`;
            cloneImg.style.left = `-${100 * cloneElIndex}%`;
          }
        });
    });
  };

  const setTranslate = () => {
    const axis = swiper.params.direction === 'vertical' ? 'Y' : 'X';
    swiper.slides.forEach((slideEl, slideIndex) => {
      slideEl.style.transform = `translate${axis}(-${slideIndex * 100}%)`;
      const slideProgress = slideEl.progress;
      const contentEl = slideEl.querySelector('.swiper-slide-content');
      if (contentEl) {
        contentEl.style.transform = `translate${axis}(${
          swiper.size * -slideProgress * 1.2
        }px)`;
      }
      const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
      images.forEach((imageEl) => {
        const progress = -slideProgress;
        imageEl.style.transform = `translate${axis}(${progress * 100}%)`;
      });
    });
  };

  const setTransition = (duration) => {
    swiper.slides.forEach((slideEl) => {
      const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
      const contentEl = slideEl.querySelector('.swiper-slide-content');
      if (contentEl) {
        contentEl.style.transitionDuration = `${duration}ms`;
      }
      // eslint-disable-next-line

      images.forEach((imageEl, imageIndex) => {
        if (duration === 0) {
          imageEl.style.transitionTimingFunction = 'ease-out';
          imageEl.style.transitionDuration = `${
            swiper.params.speed +
            (swiper.params.speed / (images.length - 1)) *
              (images.length - imageIndex - 1)
          }ms`;
        } else {
          imageEl.style.transitionTimingFunction = '';
          imageEl.style.transitionDuration = `${
            duration +
            (duration / (images.length - 1)) * (images.length - imageIndex - 1)
          }ms`;
        }
      });
    });

    effectVirtualTransitionEnd({ duration });
  };

  on('setTranslate', () => {
    if (swiper.params.effect !== 'slicer') return;

    setTranslate();
  });

  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== 'slicer') return;
    setTransition(duration);
  });

  on('beforeInit', () => {
    if (swiper.params.effect !== 'slicer') return;

    swiper.classNames.push('swiper-slicer');

    const overwriteParams = {
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: true,
    };

    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });
  on('init', () => {
    if (swiper.params.effect !== 'slicer') return;
    createImages();
    emit('setTranslate', swiper, swiper.translate);
  });

  on('resize init', () => {
    if (swiper.params.effect !== 'slicer') return;
    setImages();
  });
}
