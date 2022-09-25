<script setup lang="ts">
import AppNav from '@/components/app-nav/AppNav.vue';
</script>

<template>
  <div class="">
    <AppNav />
    <router-view name="content" />
  </div>
</template>
