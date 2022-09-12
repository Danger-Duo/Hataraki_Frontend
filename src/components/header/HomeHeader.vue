<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="w-max h-20 flex flex-row">
    <img src="../../assets/hataraki-logo-transparent.png" class="h-full" alt="" />
    <div class="h-full flex flex-row gap-5 items-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </div>
</template>
