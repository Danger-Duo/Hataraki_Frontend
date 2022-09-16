<script setup lang="ts">
import router from '@/router';
import { ref, type Ref } from 'vue';
import HomeToLoginButton from '../button/HomeToLoginButton.vue';
import HatarakiSVGLogo from '../svg-icons/hataraki/HatarakiSVGLogo.vue';
import HatarakiSVGLogoDark from '../svg-icons/hataraki/HatarakiSVGLogoDark.vue';
import HatarakiSVGIcon from '../svg-icons/hataraki/HatarakiSVGIcon.vue';
import HatarakiSVGIconDark from '../svg-icons/hataraki/HatarakiSVGIconDark.vue';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
if (isDarkMode) {
  const htmlElement: HTMLHtmlElement = document.getElementsByTagName('html')[0];
  htmlElement.classList.add('dark');
}
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

function routeHome(): void {
  router.push('/');
}
</script>

<template>
  <div class="w-full h-24 p-2 flex flex-row justify-between">
    <HatarakiSVGIcon v-if="!isDarkModeState" class="sm:hidden block h-full w-fit cursor-pointer w-auto" @click="routeHome" />
    <HatarakiSVGIconDark v-else class="sm:hidden block h-full cursor-pointer w-auto" @click="routeHome" />
    <HatarakiSVGLogo v-if="!isDarkModeState" class="hidden sm:block h-full w-fit cursor-pointer w-auto" @click="routeHome" />
    <HatarakiSVGLogoDark v-else class="hidden sm:block h-full cursor-pointer w-auto" @click="routeHome" />
    <div class="h-full flex flex-row gap-4 items-center mx-8">
      <img
        v-if="!isDarkModeState"
        src="../../assets/icons/light-mode.png"
        alt=""
        class="h-3/6 hover:cursor-pointer hover:opacity-50 animate__animated animate__fadeInUp"
        @click="toggleDarkMode"
      />
      <img
        v-else
        src="../../assets/icons/dark-mode.png"
        alt=""
        class="h-3/6 hover:cursor-pointer hover:opacity-50 invert animate__animated animate__fadeInDown"
        @click="toggleDarkMode"
      />
      <a class="h-3/6 hover:opacity-50 transition-all ease-out duration-700" href="https://github.com/Danger-Duo/Hataraki_Frontend">
        <img src="../../assets/icons/github-mark.png" alt="" class="h-full dark:invert" />
      </a>
      <HomeToLoginButton :link="'login'" :text="'Login'" />
    </div>
  </div>
</template>
