<script>
  import Hamburger from "./hamburger.svelte";

  const { children } = $props();
  let open = $state(false);
  function toggle() {
    open = !open;
    document.documentElement.scrollTop = 0;
    document.documentElement.classList.toggle("overflow-hidden");
  }
</script>

<Hamburger callback={toggle} {open} />
<aside
  class="md:hidden fixed top-0 w-full h-screen overflow-hidden bg-background shadow-lg sm:hidden"
  class:open
>
  <div class="absolute h-full w-full grid place-items-center">
    <div class="grid place-items-center gap-12">
      {@render children?.()}
    </div>
  </div>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
