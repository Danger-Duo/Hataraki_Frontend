<template>
  <div class="flex flex-col w-full md:p-8 p-4">
    <span class="dark:text-dark w-full text-4xl font-bold">Welcome to Hataraki, User!</span>
    <div class="flex flex-col w-full items-start p-2 md:p-16">
      <span class="dark:text-dark font-medium text-lg">To get you started:</span>
      <div class="flex sm:flex-row flex-col w-full">
        <div
          class="dark:text-dark flex flex-col items-center justify-center rounded border-black dark:border-white border-dashed border-4 p-4 hover:opacity-50 my-2 md:m-4 w-[250px]"
        >
          <img alt="" src="@/assets/icons/listings-button-icon-png.png" class="dark:invert" />
          <span class="font-bold text-center">Start a Job Listing</span>
        </div>
        <div
          class="dark:text-dark flex flex-col items-center justify-center rounded border-black dark:border-white border-dashed border-4 p-4 hover:opacity-50 my-2 md:m-4 w-[250px]"
        >
          <img alt="" src="@/assets/icons/schedule-button-icon-png.png" class="dark:invert" />
          <span class="font-bold text-center">Manage your Schedule</span>
        </div>
      </div>
    </div>
  </div>
</template>
