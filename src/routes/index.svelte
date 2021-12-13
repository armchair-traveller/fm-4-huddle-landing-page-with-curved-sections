<script>
import Attribution from '$lib/Attribution.svelte'
</script>

<svelte:head>
  <title>Frontend Mentor | Huddle landing page with curved sections</title>
</svelte:head>

<main class="w-screen">
  <header class="flex justify-between p-3">
    <img class="w-28 object-contain" src="/images/logo.svg" alt="logo" />
    <a class="border-primary-100 border rounded-full text-primary-100 px-5 py-1 text-sm" href="/">Try it free</a>
  </header>

  <section class="flex flex-col">
    <h1 class="text-center font-bold text-3xl mt-20">Build The Community<br /> Your Fans Will Love</h1>

    <p class="px-3 my-8 text-center font-semibold">
      Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections
      with your users as you engage in genuine discussion.
    </p>

    <a
      class="mt-4 text-center py-3 px-12 rounded-full bg-primary-100 text-primary-400 font-semibold text-sm self-center"
      href="/">Get Started For Free</a
    >
  </section>

  <div class="flex flex-col items-center p-3 mt-20">
    <img src="/images/screen-mockups.svg" alt="mockups" />

    <div class="mt-28">
      <img class="w-9 object-contain" src="/images/icon-communities.svg" alt="communities" />
      <h2 class="mt-2 font-bold text-center text-7xl">1.4k+</h2>
      <p class="mt-5 text-center opacity-80">Communities Formed</p>
    </div>

    <div class="mt-28">
      <img class="w-9 object-contain" src="/images/icon-messages.svg" alt="messages" />
      <h2 class="mt-2 font-bold text-center text-6xl">2.7m+</h2>
      <p class="mt-5 text-center opacity-80">Messages Sent</p>
    </div>
  </div>

  <section class="[ grow-together ]">
    <h2>Grow Together</h2>
    <p>
      Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful
      conversations you miss out on with a feedback form.
    </p>
  </section>

  <h2>Flowing Conversations</h2>
  <p>
    You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a
    more natural flow.
  </p>

  <h2>Your Users</h2>
  <p>
    It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to
    your app, your users can start chatting immediately.
  </p>

  <h2>Ready To Build Your Community?</h2>
  <a href="/">Get Started For Free</a>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices
    quis sem.
  </p>
  <h2>Newsletter</h2>
  <p>
    To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass
    on your email address
  </p>
  <a href="/">Subscribe</a>

  <p>Phone: +1-543-123-4567</p>
  <p>example@huddle.com</p>
</main>

<Attribution />

<style>
main {
  /* font-size: 14px; */
  font-family: 'Open Sans', system-ui;
  /* @apply bg-main-400 min-h-full; */
  @apply text-neutral-100;
}
.grow-together {
  background-image: url('/images/bg-section-top-mobile-1.svg');
}
/* breakpoints: 375, 1440 */
</style>
