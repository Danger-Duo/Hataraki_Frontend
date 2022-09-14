<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import HomeToLoginButton from '../button/HomeToLoginButton.vue';

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

  const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
  if (isDarkMode) {
    const htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
    htmlElement.classList.add('dark');
  }
  const isDarkModeState: Ref<boolean> = ref<boolean>(isDarkMode);
</script>

<template>
  <div class="w-full h-20 flex flex-row justify-between">
    <img v-if="!isDarkModeState" src="../../assets/hataraki-logo-transparent.png" class="h-full" alt="" />
    <img v-else src="../../assets/hataraki-logo-dark.png" class="h-full" alt="" />
    <div class="h-full flex flex-row gap-5 items-center mx-8">
      <img
        v-if="!isDarkModeState"
        src="../../assets/icons/light-mode-icon.png"
        alt=""
        class="h-2/6 hover:cursor-pointer hover:opacity-50"
        @click="toggleDarkMode"
      />
      <img
        v-else
        src="../../assets/icons/dark-mode-icon.png"
        alt=""
        class="h-2/6 hover:cursor-pointer hover:opacity-50 dark:invert"
        @click="toggleDarkMode"
      />
      <a class="h-3/6 hover:opacity-50" href="https://github.com/Danger-Duo/Hataraki_Frontend">
        <img src="../../assets/github-mark.png" alt="" class="h-full dark:invert" />
      </a>
      <HomeToLoginButton :link="'login'" :text="'Login'" />
    </div>
  </div>
</template>
