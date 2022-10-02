<script setup lang="ts">
import AppNav from '@/components/app-nav/AppNav.vue';
</script>

<template>
  <div class="w-full h-full flex flex-row">
    <div class="w-1/5">
      <AppNav />
    </div>
    <div class="w-4/5">
      <router-view name="content" />
    </div>
  </div>
</template>
