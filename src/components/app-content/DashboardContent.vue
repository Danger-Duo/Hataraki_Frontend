<template>
  <div class="flex flex-col w-full md:p-8 p-4 md:text-left text-center">
    <span class="dark:text-dark w-full text-4xl font-bold">Welcome to Hataraki, User!</span>
    <div class="flex flex-col w-full items-start p-2 md:p-16">
      <span class="dark:text-dark font-medium text-lg">To get you started:</span>
      <div class="flex sm:flex-row flex-col w-full items-center md:items-start">
        <router-link
          to="/app/listings/create"
          class="dark:text-dark flex flex-col items-center justify-center cursor-pointer rounded border-black dark:border-white border-dashed border-4 p-4 hover:opacity-50 m-2 md:m-4 w-[250px]"
        >
          <img alt="" src="@/assets/icons/listings-button-icon-png.png" class="dark:invert" />
          <span class="font-bold text-center">Start a Job Listing</span>
        </router-link>

        <router-link
          to="/app/schedule"
          class="dark:text-dark flex flex-col items-center justify-center cursor-pointer rounded border-black dark:border-white border-dashed border-4 p-4 hover:opacity-50 m-2 md:m-4 w-[250px]"
        >
          <img alt="" src="@/assets/icons/schedule-button-icon-png.png" class="dark:invert" />
          <span class="font-bold text-center">Manage your Schedule</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
