<script lang="ts">
  export let color: string = "";
</script>

<article class:bordered={color} style:--color="var(--clr-{color})" class="card">
  <slot />
</article>

<style>
  .card {
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: var(--large-gap);
    align-items: start;
  }

  .card.bordered {
    border-top: 0.3rem var(--color) solid;
  }

  .card {
    :global(img) {
      align-self: center;
    }

    :global(h2) {
      font-weight: 500;
      font-size: var(--font-size-fluid-1);
    }

    :global(h3) {
      display: flex;
      align-items: center;
      color: var(--color);
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    :global(p) {
      font-size: var(--font-size-fluid-0);
      color: var(--gray-6);
      line-height: var(--font-lineheight-4);
    }

    :global(.amount) {
      font-size: var(--font-size-fluid-1);
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
    }

    :global(.btn) {
      cursor: pointer;
      background-color: var(--color);
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 0.25rem;
      padding: var(--gap);
      box-shadow: #ebf5ff 0px 0px 10px 3px;
      transition: all 0.3s ease;
      border: 2px solid var(--color);
    }

    :global(.btn:hover) {
      color: var(--color);
      background-color: white;
    }
  }
</style>
