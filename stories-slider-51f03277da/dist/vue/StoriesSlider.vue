<template>
  <div ref="elRef" class="stories-slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import createStoriesSlider from '../stories-slider.esm.js';

export default {
  props: {
    swiper: {
      type: [Object, Function],
      default: undefined,
    },
    effectCube: {
      type: [Object, Function],
      default: undefined,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    autoplayDuration: {
      type: Number,
      default: 5000,
    },
  },
  emits: ['slidesIndexesChange', 'storiesSlider'],
  setup(props, ctx) {
    const elRef = ref(null);
    const storiesSliderRef = ref(null);

    onMounted(() => {
      storiesSliderRef.value = createStoriesSlider(elRef.value, {
        Swiper: props.swiper,
        EffectCube: props.effectCube,
        enabled: props.enabled,
        autoplayDuration: props.autoplayDuration,
        onSlidesIndexesChange(...args) {
          ctx.emit('slidesIndexesChange', ...args);
        },
      });
      ctx.emit('storiesSlider', storiesSliderRef.value);
    });

    onBeforeUnmount(() => {
      if (storiesSliderRef.value && storiesSliderRef.value.destroy) {
        storiesSliderRef.value.destroy();
      }
    });

    return {
      elRef,
    };
  },
};
</script>
