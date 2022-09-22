<script lang="ts">
  import { onMount } from "svelte";

  export let items: any[] = [];
  let carouselEl: HTMLDivElement;
  let activeIndex: number = 0;
  const DURATION: number = 5000;

  function step(dir: number) {
    activeIndex = (activeIndex + dir + items.length) % items.length;
    const carouselWidth = carouselEl.clientWidth;
    carouselEl.scrollTo({
      left: carouselWidth * activeIndex,
      top: 0,
      behavior: "smooth",
    });
  }

  onMount(() => {
    const interval = setInterval(() => step(1), DURATION);
    return () => clearInterval(interval);
  });
</script>

<div class="carousel" bind:this={carouselEl}>
  {#each items as item}
    <div>
      <slot {item} />
    </div>
  {/each}
</div>

<style>
  .carousel {
    display: flex;
    overflow: hidden;
    gap: var(--gap);
    align-items: center;
    scroll-snap-type: x mandatory;
  }

  .carousel > * {
    scroll-snap-align: start;
    flex-shrink: 0;
    flex-basis: 100%;
  }
</style>
