<script lang="ts">
  import type { Docs } from "@/sanity/sanity.types";

  interface Props {
    doc: Docs;
    labels: {
      techRider?: string;
      stagePlot?: string;
      hospitalityRider?: string;
      concertOffer?: string;
      pressKit?: string;
      additionalInfo?: string;
    };
  }

  const { doc, labels }: Props = $props();
</script>

{#snippet docLink({ url, label }: { url?: string; label?: string })}
  {#if url}
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class="text-foreground-darken hover:text-foreground"
    >
      {label}
    </a>
  {/if}
{/snippet}

<div class="flex flex-col mb-8">
  <h3 class="mb-4">{doc.language.toUpperCase()}</h3>
  {@render docLink({ url: doc.techRiderUrl, label: labels.techRider })}
  {@render docLink({ url: doc.stagePlotUrl, label: labels.stagePlot })}
  {@render docLink({
    url: doc.hospitalityRiderUrl,
    label: labels.hospitalityRider,
  })}
  {@render docLink({ url: doc.concertOfferUrl, label: labels.concertOffer })}
  {@render docLink({ url: doc.pressKitUrl, label: labels.pressKit })}
</div>
