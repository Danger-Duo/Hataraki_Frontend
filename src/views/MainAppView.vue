<script setup lang="ts">
import AppNav from '@/components/app-nav/AppNav.vue';
</script>

<template>
  <div class="w-full h-full flex md:flex-row flex-col">
    <div class="overflow-auto w-full md:w-1/5 md:h-screen flex flex-row md:flex-col items-center">
      <AppNav />
    </div>
    <div class="md:w-4/5">
      <router-view name="content" />
    </div>
  </div>
</template>
