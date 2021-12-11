<script>
import Attribution from '$lib/Attribution.svelte'
</script>

<svelte:head>
  <title>Frontend Mentor | Huddle landing page with curved sections</title>
</svelte:head>

<main>
  <section>
    <header class="flex justify-between">
      <img class="w-36" src="/images/logo.svg" alt="logo" />
      <a class="border-primary-100 border rounded-xl text-primary-100 p-4" href="/">Try it free</a>
    </header>

    <h1>Build The Community Your Fans Will Love</h1>

    <p>
      Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections
      with your users as you engage in genuine discussion.
    </p>

    <a href="/">Get Started For Free</a>

    <h2>1.4k+</h2>
    <p>Communities Formed</p>

    <h2>2.7m+</h2>
    <p>Messages Sent</p>

    <h2>Grow Together</h2>
    <p>
      Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful
      conversations you miss out on with a feedback form.
    </p>

    <h2>Flowing Conversations</h2>
    <p>
      You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for
      a more natural flow.
    </p>

    <h2>Your Users</h2>
    <p>
      It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to
      your app, your users can start chatting immediately.
    </p>

    <h2>Ready To Build Your Community?</h2>
    <a href="/">Get Started For Free</a>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a,
      ultrices quis sem.
    </p>
    <h2>Newsletter</h2>
    <p>
      To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass
      on your email address
    </p>
    <a href="/">Subscribe</a>

    <p>Phone: +1-543-123-4567</p>
    <p>example@huddle.com</p>
  </section>
</main>

<Attribution />

<style>
main {
  /* font-size: 14px; */
  font-family: 'Open Sans', system-ui;
  /* @apply bg-main-400 min-h-full; */
  @apply text-neutral-100;
}

/* TODO: Add your design breakpoints and additional details here, for reference while styling. */
</style>
