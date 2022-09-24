<script lang="ts">
  export let rounded: "none" | "top" | "bottom" = "none";
  export let bgColor = "white";
  export let color = "black";
</script>

<div
  class="container rounded-{rounded}"
  style:--bg-color={bgColor}
  style:--color={color}
>
  <div class="inner-wrapper">
    <slot />
  </div>
</div>

<style>
  .container {
    padding: var(--gap);
    background-color: var(--bg-color);
    padding-block: var(--larger-gap);
    margin-bottom: var(--large-gap);
    &.rounded-top {
      clip-path: ellipse(195% 100% at 50% 100%);
    }
    &.rounded-bottom {
      clip-path: ellipse(195% 100% at 50% 0%);
    }
  }

  .inner-wrapper {
    margin-inline: auto;
    max-inline-size: var(--container-inline-size);
  }
</style>
