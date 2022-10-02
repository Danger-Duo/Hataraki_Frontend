<script setup lang="ts">
import HomeHeader from '@/components/header/HomeHeader.vue';
</script>

<template>
  <HomeHeader />
  <router-view name="content" />
</template>
