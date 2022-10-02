<script setup lang="ts">
import { ref, type Ref } from 'vue';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
const isDarkModeState: Ref<boolean> = ref<boolean>(isDarkMode);

function toggleDarkMode(): void {
  const htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
  isDarkModeState.value = !isDarkModeState.value;
  if (isDarkModeState.value) {
    localStorage.setItem('isDarkMode', 'true');
    htmlElement.classList.add('dark');
  } else {
    localStorage.setItem('isDarkMode', 'false');
    htmlElement.classList.remove('dark');
  }
}
</script>

<template>
  <div class="flex flex-col w-full p-8">
    <span class="dark:text-dark w-full text-4xl font-bold">Settings</span>
    <div class="flex flex-col w-full items-start p-2 md:p-16">
      <div v-on:click="toggleDarkMode">
        <label class="dark:text-dark m-2 md:m-8">Dark Mode</label>
        <input type="checkbox" v-model="isDarkModeState" />
      </div>
    </div>
  </div>
</template>
