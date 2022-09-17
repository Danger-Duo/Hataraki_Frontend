<script setup lang="ts">
import HatarakiSVGLogo from '../components/svg-icons/hataraki/HatarakiSVGLogo.vue';
import HatarakiSVGLogoDark from '../components/svg-icons/hataraki/HatarakiSVGLogoDark.vue';
import ActionButton from '../components/button/ActionButton.vue';
import { type Ref, ref } from 'vue';
import TextInput from '../components/input/TextInput.vue';
import PasswordInput from '../components/input/PasswordInput.vue';

const isDarkMode: boolean = localStorage.getItem('isDarkMode') == 'true';
const isLogin: Ref<boolean> = ref<boolean>(true);

const loginEmail: Ref<string> = ref<string>('');
const loginPassword: Ref<string> = ref<string>('');

const registerEmail: Ref<string> = ref<string>('');
const registerPassword: Ref<string> = ref<string>('');
const registerConfirmPassword: Ref<string> = ref<string>('');

function loginUser(): void {
  console.log('Login Email: ', loginEmail.value);
  console.log('Login Password: ', loginPassword.value);
}

function registerUser(): void {
  console.log('Register Email: ', registerEmail.value);
  console.log('Register Password: ', registerPassword.value);
  console.log('Register Confirm Password: ', registerConfirmPassword.value);
}

function toggleLoginRegister(): void {
  isLogin.value = !isLogin.value;
}
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div v-if="isLogin" class="flex flex-col justify-center">
      <HatarakiSVGLogo v-if="!isDarkMode" class="h-auto w-[300px] m-5" />
      <HatarakiSVGLogoDark v-else class="h-auto w-[300px] m-5" />
      <TextInput v-model="loginEmail" label-for="loginEmail">Email Address</TextInput>
      <PasswordInput v-model="loginPassword" label-for="loginPassword">Password</PasswordInput>
      <div class="my-4 w-full">
        <ActionButton :action="loginUser">Log In</ActionButton>
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="toggleLoginRegister">Create New Account</ActionButton>
      </div>
    </div>
    <div v-else class="flex flex-col justify-center">
      <HatarakiSVGLogo v-if="!isDarkMode" class="h-auto w-[300px] m-5" />
      <HatarakiSVGLogoDark v-else class="h-auto w-[300px] m-5" />
      <TextInput v-model="registerEmail" label-for="loginEmail">Email Address</TextInput>
      <PasswordInput v-model="registerPassword" label-for="loginPassword">Password</PasswordInput>
      <PasswordInput v-model="registerConfirmPassword" label-for="loginPassword">Confirm Password</PasswordInput>
      <div class="my-4 w-full">
        <ActionButton :action="registerUser">Register</ActionButton>
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="toggleLoginRegister">Have an account? Log in here!</ActionButton>
      </div>
    </div>
  </div>
</template>
