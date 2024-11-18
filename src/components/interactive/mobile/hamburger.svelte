<script>
  const { callback, open } = $props();
</script>

<button
  class:open
  onclick={callback}
  class="md:hidden ml-auto"
  aria-label="Toggle menu"
>
  <svg width="32" height="24">
    <line id="top" x1="0" y1="2" x2="32" y2="2" />
    <line id="middle" x1="12" y1="12" x2="32" y2="12" />
    <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
  </svg>
</button>

<style>
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
    opacity: 1;
  }

  svg line {
    @apply stroke-foreground-darken stroke-[4px];
    transition: transform 0.3s ease-in-out;
  }

  /* adjust the Z-index, so that the icon is on top of the sidebar */
  button {
    z-index: 40;
  }

  /* rotate the top line */
  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  /* hide the middle */
  .open #middle {
    stroke-width: 0;
    transform: scale(0);
  }

  /* rotate the bottom line */
  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
</style>
