<script setup lang="ts">
import { RouterView } from 'vue-router';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
if (isDarkMode) {
  const htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
  htmlElement.classList.add('dark');
}
</script>

<template>
  <div class="bg-light min-h-screen dark:bg-dark">
    <RouterView />
  </div>
</template>
