<script setup lang="ts">
import router from '@/router';

const props = defineProps({
  link: { type: String, required: true },
  text: { type: String, required: true },
});

function navigateToLink(): void {
  router.push(props.link);
}
</script>

<template>
  <button
    class="hover:animate-pulse border-2 border-indigo-400 font-medium rounded-xl px-5 py-2 bg-gradient-to-r from-light via-cyan-300 to-blue-300 dark:bg-gradient-to-r dark:from-cyan-800 dark:to-blue-800 text-primary dark:text-dark"
    @click="navigateToLink"
  >
    {{ props.text }}
  </button>
</template>
