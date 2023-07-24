<template>
 <section class="home">
  <div class="container">
  <h1 class="home__title title text-uppercase">Products</h1>
  <div class="home__inner grid">
    <ProductCard v-for="product in products" :key="product.id" :item="product"/>
  </div>

  <TheLoader v-if="loading" />

 </div>
 </section>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
import ProductCard from "@/components/ProductCard.vue";
import TheLoader from '@/components/TheLoader.vue';

const store = useStore();

const { products, loading } = storeToRefs(store);
const {fetchProducts} = store;

//fetching all products with store method
fetchProducts();

</script>

<style lang="scss" scoped>

.home {
 &__inner {
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  gap: 20px;

  @media screen and (max-width: 576px) {
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  }
 }
}



</style>