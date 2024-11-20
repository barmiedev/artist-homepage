<script lang="ts">
  import type { Platform } from "@/lib/types/";
  import { cn } from "@/lib/utils";
  import { getStreamingPlatformSpecs } from "@/lib/utils/streaming-platforms";
  import { AudioLines } from "lucide-svelte";

  const { href, platform }: { href: string; platform: Platform } = $props();
  const specs = getStreamingPlatformSpecs(platform);
</script>

{#if href}
  <a
    {href}
    target="_blank"
    class={cn(
      "border border-transparent rounded-xl px-4 md:px-8 py-3 antialiased flex items-center justify-center gap-4 opacity-55 hover:opacity-70 transition duration-300 ease-in-out group",
    )}
    style={`--background: ${specs.background}; --foreground: ${specs.foreground}; background: var(--background); color: var(--foreground);`}
  >
    <div class="relative flex flex-col items-center overflow-hidden">
      <span class="invisible">{specs.label}</span>
      <span
        class="absolute top-0 left-0 group-hover:-translate-y-[120%] transition-transform ease-in-out duration-300"
      >
        {specs.label}
      </span>
      <span
        class="absolute translate-y-[120%] group-hover:translate-y-0 transition-transform ease-in-out duration-300"
      >
        <AudioLines class="h-7 w-7" />
      </span>
    </div>
  </a>
{/if}
