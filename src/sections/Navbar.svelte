<script lang="ts" context="module">
  export interface Link {
    href: string;
    title: string;
  }
</script>

<script lang="ts">
  import logoSvg from "@assets/images/logo.svg";
  import { slide } from "svelte/transition";

  export let url: URL;
  export let open: boolean = false;

  const links: Link[] = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/blog", title: "Blog" },
    { href: "/domains", title: "Domains" },
    { href: "/hosting", title: "Hosting" },
    { href: "/contact", title: "Contact" },
  ];
</script>

<div class="container">
  <nav class="nav">
    <div class="nav-header">
      <img src={logoSvg} class="nav-logo" alt="logo" />
      <div class="desktop-menu">
        <ul class="nav-list-d" transition:slide={{ duration: 150 }}>
          {#each links as { href, title } (href)}
            <li class="nav-list__item">
              <a
                class="nav-link"
                class:nav-link-active={url.pathname === href}
                {href}
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="mobile-menu">
        <!-- Mobile Menu -->
        <button class="menu-toggle" on:click={() => (open = !open)}>
          {#if open}
            <svg width="1em" height="1em" viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              /></svg
            >
          {:else}
            <svg width="1em" height="1em" viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          {/if}
        </button>
      </div>
      {#if open}
        <ul class="nav-list" transition:slide={{ duration: 150 }}>
          {#each links as { href, title } (href)}
            <li class="nav-list__item">
              <a
                class="nav-link"
                class:nav-link-active={url.pathname === href}
                {href}
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </nav>
</div>

<style>
  .mobile-menu {
    display: contents;
    @media (--lg-n-above) {
      display: none;
    }
  }

  .desktop-menu {
    display: contents;
    @media (--lg-n-below) {
      display: none;
    }
  }

  .container {
    background-color: #ebf5ff;
  }

  .nav {
    z-index: 10;
    max-inline-size: var(--container-inline-size);
    margin-inline: auto;
    justify-content: space-between;
    padding: var(--gap);
    position: relative;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
  }

  .menu-toggle {
    font-size: var(--font-size-4);
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .nav-logo {
    block-size: var(--size-7);
  }

  .nav-list {
    background-color: white;
    transform: translateY(var(--larger-gap));
    position: absolute;
    inset: auto 0;
    display: grid;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    .nav-list__item {
      display: grid;
    }

    .nav-link {
      padding: var(--gap);
      display: block;
      inline-size: 100%;
      block-size: 100%;
      text-decoration: none;
      color: black;
      font-weight: 600;
      text-transform: uppercase;
    }

    .nav-link:is(:hover, :focus) {
      background-color: var(--accent-color);
      color: white;
    }
    .nav-link-active {
      background-color: var(--accent-color);
      color: white;
    }
  }

  .nav-list-d {
    display: flex;
    .nav-list__item {
      display: grid;
    }

    .nav-link {
      padding: var(--gap);
      display: block;
      inline-size: 100%;
      block-size: 100%;
      text-decoration: none;
      color: black;
      font-weight: 600;
      text-transform: uppercase;
    }

    .nav-link:is(:hover, :focus) {
      color: var(--accent-color);
    }
    .nav-link-active {
      color: var(--accent-color);
    }
  }
</style>
