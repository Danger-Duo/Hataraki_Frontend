<script setup lang="ts">
import HatarakiSVGLogo from '../components/svg-icons/hataraki/HatarakiSVGLogo.vue';
import HatarakiSVGLogoDark from '../components/svg-icons/hataraki/HatarakiSVGLogoDark.vue';
import ActionButton from '../components/button/ActionButton.vue';
import { type Ref, ref } from 'vue';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
const isLogin: Ref<boolean> = ref<boolean>(true);

function loginUser(): void {
  console.log('Log in user');
}

function registerUser(): void {
  console.log('Register User');
}

function toggleLoginRegister(): void {
  isLogin.value = !isLogin.value;
}
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center animate__animated animate__slideInDown">
    <div v-if="isLogin" class="flex flex-col justify-center">
      <HatarakiSVGLogo v-if="!isDarkMode" class="h-auto w-[300px] m-5" />
      <HatarakiSVGLogoDark v-else class="h-auto w-[300px] m-5" />
      <div class="flex flex-col">
        <label for="email" class="m-2 text-primary dark:text-dark font-bold">Email Address</label>
        <input class="bg-input text-primary rounded-lg border-none m-2 px-4 py-2" spellcheck="false" type="text" />
      </div>
      <div class="flex flex-col">
        <label for="email" class="m-2 text-primary dark:text-dark font-bold">Password</label>
        <input class="bg-input text-primary rounded-lg border-none m-2 px-4 py-2" spellcheck="false" type="password" />
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="loginUser">Log In</ActionButton>
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="toggleLoginRegister">Create New Account</ActionButton>
      </div>
    </div>
  </div>
</template>
