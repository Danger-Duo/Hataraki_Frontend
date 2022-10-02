<script setup lang="ts">
import ActionButton from '@/components/button/ActionButton.vue';
import router from '@/router';

function goToLoginPage(): void {
  router.push('/login');
}
</script>

<template>
  <div class="w-full p-8 md:p-24 flex flex-col justify-center items-center animate__animated animate__fadeInLeftBig">
    <span class="my-2 md:text-6xl text-3xl text-primary dark:text-dark font-bold">The Next Gen ATS.</span>
    <span class="my-2 md:text-3xl text-xl text-secondary dark:text-dark-secondary font-medium">Automate your next hire!</span>
    <ActionButton class="w-fit my-2" :action="goToLoginPage">Get Started Here</ActionButton>
  </div>

  <div class="w-full p-8 lg:py-8 lg:px-[16%] flex flex-col">
    <span class="my-6 text-5xl text-center text-primary dark:text-dark font-bold">Why use Hataraki?</span>

    <div class="lg:w-[50%] my-6 flex flex-col">
      <span class="my-2 lg:text-3xl text-xl text-primary dark:text-dark-secondary font-bold">Create your own hiring workflow</span>
      <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
        >Tired of sending emails for every application on LinkedIn? Craft a template or choose from our many carefully-curated templates and have them
        sent to your candidates with a single click. You may also do your own interview form for applications and have candidates apply through your
        own customised link.</span
      >
    </div>

    <div class="lg:w-[50%] my-6 flex flex-col">
      <span class="my-2 lg:text-3xl text-xl text-primary dark:text-dark-secondary font-bold">Closing off correspondence made easy</span>
      <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
        >Want your candidates to be informed of the current application status? Hataraki allows you to send a scheduled email to remind them that you
        are still considering their application. Giving feedback to candidates has also never been easier.
      </span>
    </div>

    <div class="lg:w-[50%] my-6 flex flex-col">
      <span class="my-2 lg:text-3xl text-xl text-primary dark:text-dark-secondary font-bold">Conduct interviews with all the info you need</span>
      <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
        >Want your panel of interviewers to be updated on the latest candidates? No worries! Hataraki provides the latest information on your
        candidates so that you don't have to go around finding the correct resume. Feel free to customise how you want everyone to be informed about
        the interview scheduled.
      </span>
    </div>

    <div class="lg:w-[50%] my-6 flex flex-col">
      <span class="my-2 lg:text-3xl text-xl text-primary dark:text-dark-secondary font-bold">Minimal interruption to your current workflow</span>
      <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
        >Not used to Hataraki? Fret not! You may choose to integrate and sync Hataraki to your email inbox or use any of our available plugins and
        APIs.
      </span>
    </div>

    <div class="lg:w-[50%] my-6 flex flex-col">
      <span class="my-2 lg:text-3xl text-xl text-secondary dark:text-dark-secondary font-bold">No subscription, you pay what you need</span>
      <span class="my-2 text-xl text-secondary dark:text-dark font-normal"
        >You pay what you need and for the features that you want. In fact, Hataraki was designed to be free and usable for small teams, startups and
        businesses. Enterprise solutions are available to customise your needs.
      </span>
    </div>
  </div>
</template>
