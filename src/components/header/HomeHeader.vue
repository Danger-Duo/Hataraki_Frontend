<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import HomeToLoginButton from '../button/HomeToLoginButton.vue';

  function toggleDarkMode(): void {
    const htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  const isDarkMode: Ref<boolean> = ref<boolean>(false);
</script>

<template>
  <div class="w-full h-20 flex flex-row justify-between">
    <img src="../../assets/hataraki-logo-transparent.png" class="h-full" alt="" />
    <div class="h-full flex flex-row gap-5 items-center mx-8">
      <img
        v-if="!isDarkMode"
        src="../../assets/icons/light-mode-icon.png"
        alt=""
        class="h-2/6 hover:cursor-pointer hover:opacity-50"
        @click="toggleDarkMode"
      />
      <img v-else src="../../assets/icons/dark-mode-icon.png" alt="" class="h-2/6 hover:cursor-pointer hover:opacity-50" @click="toggleDarkMode" />
      <a class="h-3/6 hover:opacity-50" href="https://github.com/Danger-Duo/Hataraki_Frontend">
        <img src="../../assets/github-mark.png" alt="" class="h-full" />
      </a>
      <HomeToLoginButton :link="'login'" :text="'Login'" />
    </div>
  </div>
</template>
