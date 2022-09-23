<script lang="ts">
  import Card from "@components/Card.svelte";

  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";

  let el: HTMLDivElement;
  const deployedWebsites = tweened(0, { duration: 3000 });
  const clientSatisfaction = tweened(0, { duration: 3000 });
  const registeredDomains = tweened(0, { duration: 3000 });
  const hostedWebsites = tweened(0, { duration: 3000 });

  onMount(() => {
    const observer = new IntersectionObserver(() => {
      $deployedWebsites = 900;
      $clientSatisfaction = 99.9;
      $registeredDomains = 750;
      $hostedWebsites = 600;
    });

    observer.observe(el);
  });

  function formatNum(num: number, digits = 2) {
    return num.toLocaleString(undefined, { maximumFractionDigits: digits });
  }
</script>

<div class="container" bind:this={el}>
  <section class="growth">
    <span class="tagline" style="--bg-color: #cedeef; --color: var(--clr-blue)"
      >WE'RE PASSIONATE PEOPLE</span
    >
    <h2>Our Growth Statistics</h2>
    <div class="cards">
      <Card>
        <div class="content">
          <h2>{formatNum($deployedWebsites, 0)}+</h2>
          <p>Deployed Websites</p>
        </div>
      </Card>
      <Card>
        <div class="content">
        <h2>{formatNum($clientSatisfaction, 1)}%</h2>
        <p>Client Satisfaction</p>
</div>
      </Card>
      <Card>
        <div class="content">
        <h2>{formatNum($registeredDomains, 0)}+</h2>
        <p>Registered Domains</p>
</div>
      </Card>
      <Card>
        <div class="content">
        <h2>{formatNum($hostedWebsites, 0)}+</h2>
        <p>Hosted Websites</p>
</div>
      </Card>
    </div>
  </section>
</div>

<style>
  .growth {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: vaR(--gap);
  }

  .container {
    margin-inline: auto;
    margin-block: var(--larger-gap);
    max-inline-size: var(--container-inline-size);
    padding: var(--gap);
    h2 {
      font-size: var(--font-size-fluid-2);
      font-weight: 500;
    }

    p {
      margin-block: var(--small-gap) var(--large-gap);
      color: var(--gray-6);
      font-size: var(--font-size-fluid-0);
      line-height: var(--font-lineheight-4);
      text-align: left;
      @media (--sm-n-below) {
        text-align: center;
      }
      max-inline-size: 40rem;
    }
  }
  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: var(--gap);
  }

  .content {
      display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
