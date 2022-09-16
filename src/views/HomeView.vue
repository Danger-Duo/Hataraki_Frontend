<script setup lang="ts">
import HomeHeader from '../components/header/HomeHeader.vue';
import HomeToLoginButton from '../components/button/HomeToLoginButton.vue';
</script>

<template>
  <div class="bg-light min-h-screen dark:bg-dark">
    <HomeHeader />

    <div class="w-full p-8 md:p-24 flex flex-col justify-center items-center animate__animated animate__fadeInLeftBig">
      <span class="my-2 md:text-6xl text-3xl text-primary dark:text-dark font-bold">The Next Gen ATS.</span>
      <span class="my-2 md:text-3xl text-xl text-secondary dark:text-dark font-medium">Automate your next hire</span>
      <HomeToLoginButton class="w-fit my-2" :link="'login'" :text="'Get Started Here'" />
    </div>

    <div class="w-full p-8 lg:py-8 lg:px-[22em] flex flex-col">
      <span class="my-6 text-5xl text-center text-primary dark:text-dark font-bold">Why use Hataraki?</span>

      <div class="lg:w-[60%] my-6 flex flex-col">
        <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark font-bold">Create your own hiring workflow</span>
        <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
          >Tired of sending emails for every application on LinkedIn? Craft a template or choose from our many carefully-curated templates and have
          them sent to your candidates with a single click. You may also do your own interview form for applications and have candidates apply through
          your own customised link.</span
        >
      </div>

      <div class="lg:w-[60%] my-6 flex flex-col">
        <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark font-bold">Conduct any technical assessment with ease</span>
        <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
          >Want your panel of interviewers to be updated on the latest candidates? No worries! Hataraki provides the latest information on your
          candidates so that you don't have to go around finding the correct resume and assessment.
        </span>
      </div>

      <div class="lg:w-[60%] my-6 flex flex-col">
        <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark font-bold">Closing off correspondence with ease</span>
        <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
          >Want your candidates to be informed of the current application status? Hataraki allows you to send a scheduled email to remind them that
          you are still considering their application. Giving feedback to candidates has also never been easier.
        </span>
      </div>

      <div class="lg:w-[60%] my-6 flex flex-col">
        <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark font-bold">No interruption to your current workflow</span>
        <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
          >Not used to hataraki? Fret not! You may choose to integrate and sync hataraki to your email inbox or use any of our available plugins and
          APIs.
        </span>
      </div>

      <div class="lg:w-[60%] my-6 flex flex-col">
        <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark font-bold">No subscription, you pay what you need</span>
        <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
          >You pay what you need and for the features that you want. In fact, hataraki was designed to be free and usable for small teams, startups
          and businesses. Enterprise solutions are available to customise your needs if you find that the base version of hataraki is not enough.
        </span>
      </div>
    </div>
  </div>
</template>
