<template>
 <section class="cart">
  <div class="container">
   <h1 class="title cart__title text-uppercase">
    Cart
   </h1>

   <template v-if="cartItems.length">
    <div class="cart__inner grid">
     <CartItem v-for="item in cartItems" :product="item" :key="item.title" />

     <p class="cart__total">
      Total Price: <strong>{{ totalPrice }} $</strong>
    </p>
   </div>


   
   </template>

   <p v-else class="cart__empty font-bold text-uppercase">Cart Is Empty :(</p>


  </div>
 </section>
</template>

<script setup>


import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import CartItem from '@/components/CartItem.vue';


const store = useStore();

const {cartItems, cartTotal: totalPrice} = storeToRefs(store);

</script>

<style lang="scss" scoped>

.cart {
  padding-bottom: 50px;
  &__inner {
   row-gap: 25px; 
  }

  &__total {
    font-size: 20px;
  }

  &__empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(1.875rem, 1.466rem + 2.05vw, 3rem);
  }
}




</style>