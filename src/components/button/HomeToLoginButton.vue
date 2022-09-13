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
    class="hover:animate-pulse border-2 border-indigo-400 rounded-xl px-5 py-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
    @click="navigateToLink"
  >
    {{ props.text }}
  </button>
</template>
