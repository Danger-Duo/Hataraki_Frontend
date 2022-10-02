<script setup lang="ts">
import HatarakiSVGLogo from '@/components/svg-icons/hataraki/HatarakiSVGLogo.vue';
import ActionButton from '@/components/button/ActionButton.vue';
import TextInput from '@/components/input/TextInput.vue';
import PasswordInput from '@/components/input/PasswordInput.vue';
import { type Ref, ref } from 'vue';
import { validateEmail } from '@/util/validators';
import router from '@/router';

const isLogin: Ref<boolean> = ref<boolean>(true);

const loginEmail: Ref<string> = ref<string>('');
const loginPassword: Ref<string> = ref<string>('');

const registerEmail: Ref<string> = ref<string>('');
const registerPassword: Ref<string> = ref<string>('');
const registerConfirmPassword: Ref<string> = ref<string>('');

const confirmPasswordErrorMsg: Ref<string> = ref<string>('');
const registerEmailErrorMsg: Ref<string> = ref<string>('');

function loginUser(): void {
  console.log('Login Email: ', loginEmail.value);
  console.log('Login Password: ', loginPassword.value);
  router.push('/app');
}

function registerUser(): void {
  let isValid: boolean = true;
  if (registerPassword.value != registerConfirmPassword.value) {
    confirmPasswordErrorMsg.value = "Passwords don't match!";
    isValid = false;
  }
  if (!validateEmail(registerEmail.value)) {
    registerEmailErrorMsg.value = 'Please enter a valid email address.';
    isValid = false;
  }
  if (registerPassword.value.length < 8) {
    isValid = false;
    confirmPasswordErrorMsg.value = 'Password must be at least 8 characters long!';
  }
  if (isValid) {
    console.log('Register Email: ', registerEmail.value);
    console.log('Register Password: ', registerPassword.value);
    console.log('Register Confirm Password: ', registerConfirmPassword.value);
  }
}

function toggleLoginRegister(): void {
  isLogin.value = !isLogin.value;
}
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div v-if="isLogin" class="flex flex-col justify-center">
      <HatarakiSVGLogo class="h-auto w-[300px] m-5 dark:invert" />
      <TextInput v-model.trim="loginEmail" label-for="loginEmail">Email Address</TextInput>
      <PasswordInput v-model="loginPassword" label-for="loginPassword">Password</PasswordInput>
      <div class="my-4 w-full">
        <ActionButton :action="loginUser">Log In</ActionButton>
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="toggleLoginRegister">Create New Account</ActionButton>
      </div>
    </div>
    <div v-else class="flex flex-col justify-center">
      <HatarakiSVGLogo class="h-auto w-[300px] m-5 dark:invert" />
      <TextInput v-model.trim="registerEmail" label-for="registerEmail" :error-msg="registerEmailErrorMsg">Email Address</TextInput>
      <PasswordInput v-model="registerPassword" label-for="registerPassword">Password</PasswordInput>
      <PasswordInput v-model="registerConfirmPassword" label-for="registerConfirmPassword" :error-msg="confirmPasswordErrorMsg"
        >Confirm Password</PasswordInput
      >
      <div class="my-4 w-full">
        <ActionButton :action="registerUser">Register</ActionButton>
      </div>
      <div class="my-4 w-full">
        <ActionButton :action="toggleLoginRegister">Have an account? Log in here!</ActionButton>
      </div>
    </div>
  </div>
</template>
