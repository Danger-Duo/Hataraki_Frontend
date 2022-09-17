<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
  labelFor: { type: String, required: true },
  errorMsg: { type: String, required: false },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col m-2">
    <label :for="props.labelFor" class="text-primary dark:text-dark font-bold"><slot></slot></label>
    <input
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-input text-primary rounded-lg border-none px-4 py-2"
      spellcheck="false"
      type="text"
      autocomplete="off"
    />
    <span class="text-error">{{ props.errorMsg }}</span>
  </div>
</template>
