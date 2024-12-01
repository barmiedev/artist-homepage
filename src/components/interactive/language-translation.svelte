<script lang="ts">
  import { cn } from "@/lib/utils";
  import type { TrackQueryResult } from "@/sanity/sanity.types";
  import { PortableText } from "@portabletext/svelte";
  import { X } from "lucide-svelte";
  import type { Snippet } from "svelte";

  const {
    track,
    defaultLanguage = "pl",
    children,
    labels,
  }: {
    track: TrackQueryResult;
    defaultLanguage:
      | "pl"
      | "en"
      | "de"
      | "cz"
      | "sk"
      | "fr"
      | "es"
      | "it"
      | "ru"
      | "jp"
      | "cn"
      | "kr"
      | "uk";
    children: Snippet;
    labels: {
      availableTranslations: string;
      originalLyrics: string;
      translation: string;
    };
  } = $props();

  let activeTranslation: string | undefined = $state();
  let hidingTranslation: string | undefined = $state();
  const setActiveTranslation = (language?: string) => () => {
    if (!language) {
      hidingTranslation = activeTranslation;
      setTimeout(() => {
        hidingTranslation = undefined;
      }, 300);
    }
    activeTranslation = language;
  };

  const translations = track?.lyrics
    ?.map((lyric) => lyric.language)
    .filter((lyric) => lyric !== defaultLanguage);
</script>

{#if track?.lyrics}
  {#if translations && translations.length > 0}
    <div class="mb-8">
      {labels.availableTranslations}:
      <div class="md:inline-flex group">
        <ul
          class="inline-flex flex-wrap md:ml-2 gap-8 group-hover:text-foreground-darken text-foreground/80"
        >
          {#each translations as lyric}
            {#if lyric && lyric !== defaultLanguage}
              <li
                class={cn(
                  "transition duration-300 ease-in-out  hover:text-foreground",
                  {
                    "text-foreground/90 hover:text-foreground":
                      activeTranslation === lyric,
                  },
                )}
              >
                <button onclick={setActiveTranslation(lyric)}
                  >{lyric.toUpperCase()}</button
                >
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </div>
  {/if}
  {#if children}
    <p class="mb-4">{labels.originalLyrics}</p>
    {@render children?.()}
  {/if}
  <p
    class={cn("duration-150 overflow-hidden max-h-0 origin-top ", {
      "max-h-screen flex items-center gap-4 mt-8": activeTranslation,
    })}
  >
    {activeTranslation?.toUpperCase() || hidingTranslation?.toUpperCase()}
    {labels.translation}
    <button onclick={setActiveTranslation()}><X class="w-4 h-4" /></button>
  </p>
  {#each track?.lyrics as lyric}
    {#if lyric.language === activeTranslation}
      <article class="prose prose-stone prose-invert">
        <PortableText value={lyric.text} components={{}} />
      </article>
    {/if}
  {/each}
{/if}
