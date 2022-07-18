<script>
  import { onMount, onDestroy } from 'svelte';
  import createStoriesSlider from '../stories-slider.esm.js';

  export let Swiper = undefined;
  export let EffectCube = undefined;
  export let enabled = true;
  export let autoplayDuration = 5000;
  export let onStoriesSlider = undefined;
  export let onSlidesIndexesChange = undefined;

  let elRef = null;
  let storiesSlider = null;

  onMount(() => {
    storiesSlider = createStoriesSlider(elRef, {
      Swiper,
      EffectCube,
      enabled,
      autoplayDuration,
      onSlidesIndexesChange,
    });
    if (onStoriesSlider) onStoriesSlider(storiesSlider);
    return () => {};
  }, []);
  onDestroy(() => {
    if (storiesSlider && storiesSlider.destroy) {
      storiesSlider.destroy();
    }
  });
</script>

<div class="stories-slider" bind:this={elRef} {...$$restProps}>
  <div class="swiper">
    <div class="swiper-wrapper"><slot /></div>
  </div>
</div>
