<script>
  import { ChevronLeft } from "lucide-svelte";

  const { href, children } = $props();
</script>

<a
  {href}
  class="relative group flex items-center transform translate-x-0 select-none mb-8 h-fit"
>
  <ChevronLeft
    class="absolute w-4 h-4 opacity-0 group-hover:opacity-100 duration-100 text-current"
  />
  <span
    class="absolute group-hover:translate-x-6 translate-x-0 duration-200 ease-in-out text-foreground-darken hover:text-foreground"
    >{@render children?.()}</span
  >
</a>
