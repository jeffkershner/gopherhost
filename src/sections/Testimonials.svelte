<script lang="ts">
  import testimonialImg from "@assets/images/home-testimonial-section-img.png";
  import quotesImg from "@assets/images/quotes.png";
  import Carousel from "@components/Carousel.svelte";

  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "John Doe",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "John Doe",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "John Doe",
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
