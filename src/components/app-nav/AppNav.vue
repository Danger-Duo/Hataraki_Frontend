<script setup lang="ts">
import HatarakiSVGLogo from '@/components/svg-icons/hataraki/HatarakiSVGLogo.vue';
import HatarakiSVGLogoDark from '@/components/svg-icons/hataraki/HatarakiSVGLogoDark.vue';
import AppNavLink from './AppNavLink.vue';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
</script>
<template>
  <div class="h-screen flex flex-col items-center bg-light divide-y divide-dashed divide-light-secondary">
    <div class="w-full flex flex-row items-center justify-center">
      <HatarakiSVGLogo v-if="!isDarkMode" class="h-auto w-3/5 p-2 min-w-[150px]" />
      <HatarakiSVGLogoDark v-else class="h-auto w-3/5 p-2 min-w-[150px]" />
    </div>
    <AppNavLink link="/app">
      <img src="@/assets/icons/home-button-icon-png.png" class="dark:invert h-8" alt="" />
      <span class="dark:text-dark"> Home </span>
    </AppNavLink>
    <AppNavLink link="/app/listings">
      <img src="@/assets/icons/listings-button-icon-png.png" class="dark:invert h-8" alt="" />
      <span class="dark:text-dark">My Listings</span>
    </AppNavLink>
    <AppNavLink link="/app/settings">
      <img src="@/assets/icons/settings-button-icon-png.png" class="dark:invert h-8" alt="" />
      <span class="dark:text-dark">Settings</span>
    </AppNavLink>
  </div>
</template>
