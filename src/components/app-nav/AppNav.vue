<script setup lang="ts">
import HatarakiSVGLogo from '@/components/svg-icons/hataraki/HatarakiSVGLogo.vue';
import HatarakiSVGIcon from '@/components/svg-icons/hataraki/HatarakiSVGIcon.vue';
import AppNavLink from './AppNavLink.vue';
</script>
<template>
  <div class="flex flex-row items-center justify-center md:hidden">
    <HatarakiSVGIcon class="h-auto p-2 w-[70px] dark:invert" />
  </div>
  <div class="w-full md:flex flex-row items-center justify-center hidden">
    <HatarakiSVGLogo class="h-auto w-3/5 p-2 min-w-[150px] dark:invert" />
  </div>
  <AppNavLink link="/app">
    <img src="@/assets/icons/home-button-icon-png.png" class="dark:invert h-8" alt="" />
    <span class="dark:text-dark"> Home </span>
  </AppNavLink>
  <AppNavLink link="/app/listings">
    <img src="@/assets/icons/listings-button-icon-png.png" class="dark:invert h-8" alt="" />
    <span class="dark:text-dark">My Listings</span>
  </AppNavLink>
  <AppNavLink link="/app/schedule">
    <img src="@/assets/icons/schedule-button-icon-png.png" class="dark:invert h-8" alt="" />
    <span class="dark:text-dark">Schedule</span>
  </AppNavLink>
  <AppNavLink link="/app/settings">
    <img src="@/assets/icons/settings-button-icon-png.png" class="dark:invert h-8" alt="" />
    <span class="dark:text-dark">Settings</span>
  </AppNavLink>
</template>
