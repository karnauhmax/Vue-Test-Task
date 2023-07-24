<template>
 <button class="btn product__btn" :class="{'added-to-cart': addedToCart}" :disabled="addedToCart">
  
  <template v-if="addedToCart">In Cart</template>
 
  <template v-else>
   Add To Cart
  </template>
 </button>
</template>

<script setup>

import { toRefs } from 'vue';

const props = defineProps({
 addedToCart: {
  type: Boolean,
  default: false
 }
})

const {addedToCart} = toRefs(props);



</script>

<style lang="scss" scoped></style>