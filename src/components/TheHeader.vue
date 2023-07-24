<template>
 <header class="header">
  <div class="container">
   <div class="header__inner flex justify-content-between align-items-center">

    <RouterLink :to="{path: '/' }" class="header__logo text-uppercase font-bold">
      Test Task
    </RouterLink>

    <RouterLink :to="{path: '/cart' }" class="header__cart">
      cart ({{ store.cartAmount }}) 
    </RouterLink>

   </div>
  </div>
 </header>
</template>

<script setup>
import {useStore} from "@/stores/store.js";

const store = useStore();

</script>

<style lang="scss" scoped>
.header {
 padding: 15px 0;
 box-shadow: 0px 9px 32px -19px rgba(0,0,0,0.75);
 margin-bottom: 40px;
 &__logo {
   font-size: 24px;
 }

 &__cart {
  @media (any-hover: hover) {
   &:hover {
    text-decoration: underline;
   }
  }
  
 }
}
</style>