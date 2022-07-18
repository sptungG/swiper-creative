<script>
  export let avatar = undefined;
  export let userLink = undefined;
  export let name = undefined;
  export let date = undefined;
  export let closeButton = undefined;
  export let onCloseButtonClick = undefined;
</script>

<div class="swiper-slide" {...$$restProps}>
  <a href={userLink} class="stories-slider-user">
    {#if avatar || $$slots.avatar}
      <div class="stories-slider-user-avatar">
        {avatar || ''}
        <slot name="avatar" />
      </div>
    {/if}
    {#if name || $$slots.name}
      <div class="stories-slider-user-name">
        {name || ''}
        <slot name="name" />
      </div>
    {/if}
    {#if date || $$slots.date}
      <div class="stories-slider-user-date">
        {date || ''}
        <slot name="date" />
      </div>
    {/if}
  </a>
  {#if closeButton}
    <div class="stories-slider-actions">
      <button
        class="stories-slider-close-button"
        on:click={onCloseButtonClick}
      />
    </div>
  {/if}

  <div class="stories-slider-content"><slot /></div>
</div>
