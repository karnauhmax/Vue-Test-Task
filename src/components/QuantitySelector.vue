<template>
 <div class="quantity-selector font-bold grid align-items-center">
  <button @click="decrementValue" class="quantity-selector__btn minus" :disabled="disabled" :class="{disabled}">-</button>
  <div class="quantity-selector__input primary-border centered">
    {{ quantity }}
  </div>
  <button @click="incrementValue" class="quantity-selector__btn plus">+</button>
 </div>
</template>

<script setup>

import { ref, computed } from "vue";

const props = defineProps({
 modelValue: {
  type: Number,
  default: 1
 }
})

const disabled = computed(() => {
 return quantity.value <= 1;
})

const emits = defineEmits(['update:modelValue']);

const quantity = ref(props.modelValue);

const incrementValue = () => {
 quantity.value++;
 emits('update:modelValue', quantity.value);
}

const decrementValue = () => {

 if (quantity.value > 0) {
  quantity.value--;
  emits('update:modelValue', quantity.value);
 }

}


</script>

<style lang="scss" scoped>
.quantity-selector {
 gap: 10px;

 grid-template-columns: min-content 60px min-content;

 &__input {
  padding: 10px;
  font-weight: 700;
 }

 &__btn {
  font-size: 24px;
 }


}


</style>