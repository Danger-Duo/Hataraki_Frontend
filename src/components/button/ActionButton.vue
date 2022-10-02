<script setup lang="ts">
const props = defineProps({
  action: { type: Function, required: true },
});
</script>

<template>
  <button
    class="hover:animate-pulse border-2 border-indigo-400 w-full font-medium rounded-xl px-5 py-2 bg-gradient-to-r from-light via-cyan-300 to-blue-300 dark:bg-gradient-to-r dark:from-cyan-800 dark:to-blue-800 text-primary dark:text-dark-secondary"
    @click="props.action"
  >
    <slot></slot>
  </button>
</template>
2
