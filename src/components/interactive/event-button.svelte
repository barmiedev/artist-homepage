<script lang="ts">
  import { Calendar } from "lucide-svelte";

  const { label, href }: { label: string; href?: string } = $props();
  import { cn } from "@/lib/utils";
</script>

<a
  {href}
  class={cn(
    "bg-foreground/40 text-background hover:text-background-darken border border-transparent hover:bg-foreground/60 rounded-xl px-4 md:px-8 py-3 antialiased flex items-center max-md:justify-between gap-4",
  )}
>
  <Calendar class="w-6 h-6" />
  <span>{label}</span>
  <Calendar class="w-6 h-6 md:hidden" />
</a>
