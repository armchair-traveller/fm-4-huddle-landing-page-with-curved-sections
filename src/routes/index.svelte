<script>
import Attribution from '$lib/Attribution.svelte'
import Instagram from 'virtual:icons/mdi/instagram'
import Facebook from 'virtual:icons/mdi/facebook-box'
import Twitter from 'virtual:icons/mdi/twitter-box'
let value,
  isValid = true
$: if (value) isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
</script>

<svelte:head>
  <title>Frontend Mentor | Huddle landing page with curved sections</title>
</svelte:head>

<header class="flex justify-between p-3 xl:px-0 text-neutral-100 lg:max-w-screen-lg lg:mx-auto">
  <img class="w-28 object-contain" src="/images/logo.svg" alt="logo" />
  <a
    class="border-primary-100 border rounded-full text-primary-100 px-5 py-1 text-sm hover:border-primary-200 active:border-primary-200 hover:text-primary-200 active:text-primary-200"
    href="/">Try it free</a
  >
</header>
<main class="text-neutral-100">
  <section class="flex flex-col">
    <h1 class="text-center font-bold text-3xl mt-20">
      Build The Community<br class="lg:hidden" /> Your Fans Will Love
    </h1>

    <p class="px-4 my-8 max-w-prose text-center mx-auto">
      Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections
      with your users as you engage in genuine discussion.
    </p>

    <a
      class="[ btn-filled ] mt-4 text-center py-3 px-12 rounded-full bg-primary-100 text-primary-400 font-semibold text-sm self-center"
      href="/">Get Started For Free</a
    >
  </section>

  <div class="flex flex-col items-center p-3 mt-20 lg:contents">
    <img class="lg:mx-auto lg:mt-20 p-4 xl:p-0" src="/images/screen-mockups.svg" alt="mockups" />

    <div class="contents lg:flex mx-auto justify-between max-w-screen-lg px-20">
      <div class="mt-28">
        <img class="w-9 object-contain" src="/images/icon-communities.svg" alt="communities" />
        <h2 class="mt-2 font-bold text-center text-7xl">1.4k+</h2>
        <p class="mt-5 text-center opacity-80">Communities Formed</p>
      </div>

      <div class="mt-28">
        <img class="w-9 object-contain" src="/images/icon-messages.svg" alt="messages" />
        <h2 class="mt-2 font-bold text-center text-6xl lg:text-7xl">2.7m+</h2>
        <p class="mt-5 text-center opacity-80">Messages Sent</p>
      </div>
    </div>
  </div>

  <div class="[ bg-section-top-1 ] aspect-[375/112] lg:aspect-[1440/165] bg-cover" />
  <section class="bg-neutral-200 flex flex-col items-center p-4 xl:p-0">
    <div class="contents lg:flex lg:flex-row-reverse lg:max-w-screen-lg lg:items-center">
      <img
        class="w-4/5 mt-20 lg:w-2/5 lg:mt-0"
        src="/images/illustration-grow-together.svg"
        alt="grow together illustration"
      />
      <div class="contents lg:block">
        <h2 class="mt-20 font-bold text-2xl lg:mt-0">Grow Together</h2>
        <p class="mt-4 mb-12 text-center w-10/12 lg:text-left lg:mb-0">
          Generate meaningful discussions with your audience and build a strong, loyal community. Think of the
          insightful conversations you miss out on with a feedback form.
        </p>
      </div>
    </div>
  </section>
  <div class="[ bg-section-bottom-1 ] aspect-[375/52] lg:aspect-[1440/139] bg-cover" />

  <section
    class="flex flex-col items-center lg:flex-row lg:mt-20 lg:max-w-screen-lg lg:mx-auto lg:items-center lg:gap-[10%] p-4 xl:p-0"
  >
    <img
      class="w-4/5 mt-20 lg:mt-0 lg:w-2/5"
      src="/images/illustration-flowing-conversation.svg"
      alt="flowing conversation illustration"
    />
    <div class="contents lg:block">
      <h2 class="mt-20 font-bold text-2xl lg:mt-0">Flowing Conversations</h2>
      <p class="mt-4 mb-12 text-center w-10/12 lg:w-full lg:text-left lg:mb-0">
        You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading
        for a more natural flow.
      </p>
    </div>
  </section>

  <div class="[ bg-section-top-2 ] aspect-[375/103] lg:aspect-[1440/156] mt-20 bg-cover" />
  <section class="bg-neutral-200 flex flex-col items-center p-4 xl:p-0">
    <div class="contents lg:flex lg:flex-row-reverse lg:max-w-screen-lg lg:items-center">
      <img
        class="w-4/5 mt-8 lg:w-2/5 lg:mt-0"
        src="/images/illustration-your-users.svg"
        alt="your users illustration"
      />
      <div class="contents lg:block">
        <h2 class="mt-20 font-bold text-2xl lg:mt-0">Your Users</h2>
        <p class="mt-4 mb-32 text-center w-10/12 lg:text-left lg:mb-0">
          It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed
          in to your app, your users can start chatting immediately.
        </p>
      </div>
    </div>
  </section>
  <div class="[ bg-section-bottom-2 ] aspect-[375/101] lg:aspect-[1440/139] bg-cover" />

  <section class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold text-center">Ready To Build Your Community?</h2>
    <a
      class="[ btn-filled ] mt-10 text-center py-3 px-12 rounded-full bg-primary-100 text-primary-400 font-semibold text-sm self-center"
      href="/">Get Started For Free</a
    >
  </section>
</main>
<div class="[ bg-footer-top ] aspect-[375/53] lg:aspect-[1440/158] bg-cover mt-60" />
<footer class="bg-neutral-100 text-neutral-200">
  <div class="contents lg:flex-row-reverse lg:flex lg:justify-between lg:max-w-screen-lg lg:mx-auto">
    <section class="flex flex-col p-4">
      <h2 class="text-xl font-bold mt-12 uppercase lg:mt-0">Newsletter</h2>
      <p class="mt-4 lg:max-w-[41ch]">
        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or
        pass on your email address
      </p>
      <div class="contents lg:block">
        <input
          class="mt-7 p-3 text-neutral-100 rounded-md lg:w-[20rem] lg:mr-8 {isValid ? '' : 'border border-primary-300'}"
          type="text"
          name=""
          id=""
          bind:value
        />
        <a
          class="[ btn-filled ] w-max mt-4 text-center py-3 px-12 rounded-md bg-primary-100 font-semibold text-lg self-end"
          href="/">Subscribe</a
        >
        {#if !isValid}
          <p class="mt-2 text-sm text-primary-300" id="email-error">Check your email please</p>
        {/if}
      </div>
    </section>

    <section class="flex flex-col p-4 xl:p-0">
      <img class="w-48 object-contain lg:mt-0" src="/images/logo-white.svg" alt="white logo" />
      <p class="mt-4 lg:max-w-[41ch]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a,
        ultrices quis sem.
      </p>
      <div class="flex gap-4 items-center mt-8 mb-4">
        <img class="aspect-square" src="/images/icon-phone.svg" alt="phone icon" />
        <p>Phone: +1-543-123-4567</p>
      </div>
      <div class="flex gap-4 items-center">
        <img class="aspect-[20/16]" src="/images/icon-email.svg" alt="email icon" />
        <p>example@huddle.com</p>
      </div>

      <div class="flex gap-4 items-center -ml-1 my-8">
        <a href="/"><Facebook width="28" height="28" /> </a>
        <a href="/"><Instagram width="28" height="28" /> </a>
        <a href="/" class="active:text-[#57c9f7] hover:text-[#57c9f7]"><Twitter width="28" height="28" /> </a>
      </div>
    </section>
  </div>
</footer>

<Attribution />

<style>
main {
  /* font-size: 14px; */
  font-family: 'Open Sans', system-ui;
}
.bg-section-top-1 {
  background-image: url('/images/bg-section-top-mobile-1.svg');
}
.bg-section-top-2 {
  background-image: url('/images/bg-section-top-mobile-2.svg');
}
.bg-section-bottom-1 {
  background-image: url('/images/bg-section-bottom-mobile-1.svg');
}
.bg-section-bottom-2 {
  background-image: url('/images/bg-section-bottom-mobile-2.svg');
}
.bg-footer-top {
  background-image: url('/images/bg-footer-top-mobile.svg');
}
@media (min-width: 1024px) {
  .bg-section-top-1 {
    background-image: url('/images/bg-section-top-desktop-1.svg');
  }
  .bg-section-top-2 {
    background-image: url('/images/bg-section-top-desktop-2.svg');
  }
  .bg-section-bottom-1 {
    background-image: url('/images/bg-section-bottom-desktop-1.svg');
  }
  .bg-section-bottom-2 {
    background-image: url('/images/bg-section-bottom-desktop-2.svg');
  }
  .bg-footer-top {
    background-image: url('/images/bg-footer-top-desktop.svg');
  }
}
.btn-filled:hover,
.btn-filled:active {
  @apply bg-primary-200;
}
/* target breakpoints: 375, 1440 */
</style>
