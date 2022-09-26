<script lang="ts">
  import testimonialImg from "@assets/images/home-testimonial-section-img.png";
  import quotesImg from "@assets/images/quotes.png";
  import Carousel from "@components/Carousel.svelte";

  const testimonials = [
    {
      content:
        "GopherHost hosts all 3 of my company's websites.  I don't even know how to login to my managed WordPress site since GopherHost handles all my updates, backups and website changes.  I highly recommend them!",
      author: "Bryan C.",
    },
    {
      content: "My company's website was hosted at another hosting company and I was experiencing 10-15 second load times.  I met Jeff from GopherHost at an event and   he performed a website audit for me for free.  He told me what the problems were within 20 minutes.  He migrated my website to GopherHost, fixed all my issues and now my website loads in under 1 second for half the price!",
      author: "Jessie Y.",
    },
    {
      content: "I have a small WordPress website that was at another web hosting company.  The page speed was so slow and that company kept saying I needed to upgrade to a dedicated server to fix the page loading problems.  GopherHost migrated my site for free and made a few tweaks to get my page loading in under 1 second.",
      author: "Christy M.",
    },
    {
      content: "I have a single medium sized website but I needed a bunch of other domains to point to my main site.  My other hosting account wanted me to purchase 8 hosting accounts just to forward all my domains to my main site.  GopherHost migrated my website, domain, setup all my DNS and email accounts overnight with zero downtime and saved me a ton of money.  I'm never going to host anywhere else.",
      author: "Andrew R.",
    },    
  ];
</script>

<section
  class="testimonials"
  style="--bg-color: #ebf5ff; --color: var(--clr-blue)"
>
  <img src={testimonialImg} />
  <div class="content">
    <span class="tagline">TESTIMONIALS</span>
    <h2>Customers Review</h2>
    <Carousel items={testimonials} let:item>
      <article class="testimonial">
        <span class="quote"> <img src={quotesImg} /></span>
        <figure>
          <blockquote>
            {item.content}
          </blockquote>
          <figcaption>{item.author}</figcaption>
        </figure>
      </article>
    </Carousel>
  </div>
</section>

<style>
  .testimonials {
    max-inline-size: var(--container-inline-size);
    margin-inline: auto;
    margin-block: var(--large-gap);
    padding: var(--gap);
    gap: var(--gap);
    display: grid;
    place-items: center;
    text-align: center;
    position: relative;
    @media (--md-n-above) {
      grid-template-columns: repeat(2, 1fr);
      text-align: left;
    }
  }

  .content {
    place-items: center;
    gap: var(--gap);
    display: grid;
    @media (--md-n-above) {
      place-items: start;
    }
  }

  .quote {
    font-size: 3rem;
    line-height: 1;
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    align-items: start;
  }

  .testimonial figure {
    display: flex;
    flex-direction: column;
    gap: var(--large-gap);
    align-items: start;
  }

  .testimonial figcaption {
    font-weight: 700;
  }

  .testimonial blockquote {
    text-align: left;
    color: var(--gray-6);
    font-size: var(--font-size-fluid-0);
    line-height: var(--font-lineheight-4);
  }

  .testimonials h2 {
    font-size: var(--font-size-fluid-1);
    font-weight: 600;
  }
</style>
