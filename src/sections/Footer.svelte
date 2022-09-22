<script lang="ts" context="module">
  export interface Link {
    icon: string;
    href: string;
    title: string;
  }
</script>

<script lang="ts">
  import logoSvg from "@assets/images/logo.svg";

  const icons = {
    check: `<svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/></svg>`,
    cross: `<svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"/></svg>`,
    dot: `<svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 5a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>`,
  };

  const websiteLinks: Link[] = [
    { href: "/", title: "Home", icon: icons.check },
    { href: "/about", title: "About", icon: icons.cross },
    { href: "/blog", title: "Blog", icon: icons.dot },
    { href: "/domains", title: "Domains", icon: icons.check },
    { href: "/hosting", title: "Hosting", icon: icons.check },
    { href: "/affiliates", title: "Affiliates", icon: icons.cross },
    { href: "/terms", title: "Terms of Use", icon: icons.dot },
    { href: "/privacy", title: "Privacy Policy", icon: icons.check },
  ];

  const supportLinks: Link[] = [
    {
      href: "https://account.gopherhost.com/knowledgebase",
      title: "Knowledge Base",
      icon: icons.check,
    },
    {
      href: "https://account.gopherhost.com/password/reset",
      title: "Forgot Password",
      icon: icons.cross,
    },
    {
      href: "https://account.gopherhost.com//supporttickets.php",
      title: "Support Tickets",
      icon: icons.dot,
    },
    { href: "/contact", title: "Contact", icon: icons.check },
  ];
</script>

<div class="footer-container">
  <footer class="footer">
    <section>
      <img class="logo" src={logoSvg} alt="logo" />
      <p>
        We love small business because we are small business! GopherHost has
        been helping people get online since 2007.
      </p>
      <p>
        Experience the GopherHost difference today; you won’t be sorry you
        switched.
      </p>
    </section>
    <div class="divider" />
    <section>
      <h3>Website Links</h3>
      <ul>
        {#each websiteLinks as { href, title, icon } (href)}
          <li>
            <a {href}>
              {@html icon}
              <span>
                {title}
              </span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
    <div class="divider" />
    <section class="support">
      <h3>Support</h3>
      <ul>
        {#each supportLinks as { href, title, icon } (href)}
          <li>
            <a {href}>
              {@html icon}
              <span>
                {title}
              </span>
            </a>
          </li>
        {/each}
      </ul>
      <div class="social">
        <a href="https://www.facebook.com/gopherhost" aria-label="facebook">
          <svg width="1em" height="1em" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
            /></svg
          >
        </a>
        <a href="https://www.facebook.com/gopherhost" aria-label="twitter">
          <svg width="1em" height="1em" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
            /></svg
          >
        </a>
      </div>
    </section>
  </footer>
  <p class="copyright">COPYRIGHT © 2022 GOPHERHOST.COM ALL RIGHTS RESERVED</p>
</div>

<style>
  .footer {
    max-inline-size: var(--container-inline-size);
    margin-inline: auto;
    margin-block-start: var(--large-gap);
    padding: var(--gap);
    gap: var(--gap);
    display: grid;
    place-items: center;
    position: relative;
  }

  @media (max-width: 768px) {
    .footer {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .footer {
      place-items: start;
      grid-template-columns: 1fr auto 1fr auto 1fr;
    }
  }

  .logo {
    max-inline-size: 11rem;
    margin-block-end: var(--gap);
  }

  .footer-container {
    background-color: #ebf5ff;
    padding: var(--large-gap);
    margin-top: var(--large-gap);
    clip-path: ellipse(195% 100% at 50% 100%);
  }

  section {
    gap: var(--gap);
    display: grid;
  }
  @media (max-width: 768px) {
    section {
      place-items: center;
    }
  }

  .divider {
    border-bottom: 1px solid var(--clr-blue);
    border-right: 1px solid var(--clr-blue);
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    .divider {
      width: 1px;
    }
  }
  .footer h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  .footer p {
    font-size: var(--font-size-fluid-0);
    color: var(--gray-6);
    line-height: var(--font-lineheight-4);
    text-align: center;
    max-inline-size: 40rem;
  }

  .footer ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--small-gap);
  }

  @media (min-width: 768px) {
    .footer ul {
      align-items: flex-start;
    }
  }

  @media (min-width: 768px) {
    .footer :not(.support) ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: var(--gap);
    }
  }

  .footer ul a {
    display: flex;
    align-items: center;
    gap: var(--smaller-gap);
    color: var(--gray-6);
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: none;
  }

  .social a {
    font-size: 2rem;
    color: var(--accent-color);
  }

  .copyright {
    grid-column: 1/-1;
    border-top: 1px solid var(--gray-4);
    font-size: 0.75rem;
    line-height: 1rem;
    width: 100%;
    color: gray;
    text-align: center;
    padding: var(--small-gap);
  }
</style>
