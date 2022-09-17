<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
  labelFor: { type: String, required: true },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col">
    <label :for="props.labelFor" class="m-2 text-primary dark:text-dark font-bold"><slot></slot></label>
    <input
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-input text-primary rounded-lg border-none m-2 px-4 py-2"
      spellcheck="false"
      type="text"
    />
  </div>
</template>
