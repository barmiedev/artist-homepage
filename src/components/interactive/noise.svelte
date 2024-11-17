<script>
  import { onMount } from "svelte";

  let grainRef;

  onMount(() => {
    const grain = grainRef;
    if (!grain) return;

    const keyframesX = [
      "0%",
      "-5%",
      "-15%",
      "7%",
      "-5%",
      "-15%",
      "15%",
      "0%",
      "3%",
      "-10%",
    ];
    const keyframesY = [
      "0%",
      "-10%",
      "5%",
      "-25%",
      "25%",
      "10%",
      "0%",
      "15%",
      "35%",
      "10%",
    ];
    let i = 0;

    const interval = setInterval(() => {
      grain.style.transform = `translateX(${
        keyframesX[i % keyframesX.length]
      }) translateY(${keyframesY[i % keyframesY.length]})`;

      i++;
    }, 50);

    return () => clearInterval(interval);
  });
</script>

<div
  class="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden"
>
  <div
    bind:this={grainRef}
    class="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/noise.png')] bg-[length:256px] bg-left-top opacity-[50%]"
  ></div>
</div>
