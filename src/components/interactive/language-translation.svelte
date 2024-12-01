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

    // check if we are in the mobile view
    if (window.innerWidth < 768) {
      const translationElement = document.getElementById("translation");
      const originalElement = document.getElementById("original");
      if (activeTranslation) {
        translationElement?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        originalElement?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
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
                  "transition duration-300 ease-in-out hover:text-foreground",
                  {
                    "text-foreground/90 hover:text-foreground":
                      activeTranslation === lyric,
                  },
                  {
                    "text-foreground-darken": activeTranslation !== lyric,
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
  <div class="grid gap-8 lg:grid-cols-2">
    <div id="original">
      {#if children}
        <p class="mb-4">{labels.originalLyrics}</p>
        {@render children?.()}
      {/if}
    </div>
    <div id="translation">
      <p
        class={cn("duration-200 opacity-0 overflow-hidden max-h-0 origin-top", {
          "max-h-screen flex items-center opacity-100 gap-4 max-md:mt-8 mb-4":
            activeTranslation,
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
    </div>
  </div>
{/if}
