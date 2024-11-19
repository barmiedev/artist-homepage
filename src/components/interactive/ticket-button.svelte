<script lang="ts">
  import { Ticket } from "lucide-svelte";

  const { label, href, date }: { label: string; href?: string; date: string } =
    $props();
  import { cn } from "@/lib/utils";

  const inPast = new Date(date) < new Date();
</script>

<a
  {href}
  class={cn(
    "bg-foreground/40 text-background hover:text-background-darken border border-transparent hover:bg-foreground/60 rounded-xl px-4 md:px-8 py-3 antialiased flex items-center max-md:justify-between gap-4",
    {
      "pointer-events-none cursor-not-allowed bg-red-800/20 text-foreground/50":
        inPast,
    },
  )}
>
  <Ticket class="w-6 h-6" />
  <span>{label}</span>
  <Ticket class="w-6 h-6 md:hidden" />
</a>
