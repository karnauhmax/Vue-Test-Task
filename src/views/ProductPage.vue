<template>
 
   <section class="product">
     <div class="container">
      
       <div v-if="!loading" class="product__inner grid justify-items-center">
        <div class="product__img">
          <img :src="product.image" :alt="product.title" />
        </div>
         <div class="product__info grid">
          <h1 class="product__title title">{{ product.title }}</h1>
          <p class="product__description">
           {{ product.description }}
          </p>
          <div class="product__summary grid">
           <strong class="product__price">Price: {{ product.price }}$</strong>
           <CartBtn @click="addToCart" :added-to-cart="isItemInCart(product.id)" />
          </div>
         </div>
       </div>

       <TheLoader v-else />
     </div>
   </section>
 
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import TheLoader from '@/components/TheLoader.vue';
import CartBtn from '@/components/CartBtn.vue';
import router from '../router';

const route = useRoute();
const store = useStore();
const {isItemInCart, loading, products} = storeToRefs(store);


const product = ref({});
const addedToCart = ref(false);
const {fetchProductById} = store;
const currentProductId = route.params.id;

//handling scenario when user can change product's route to invalid

onBeforeRouteUpdate(async(to, from) => {
  const newId = to.params.id;
  const itemToCheck = await fetchProductById(newId);


  if (itemToCheck) {
    product.value = itemToCheck;
  } else {
    router.push({path: '/404'})
  }
  
})


const addToCart = () => {
 store.addToCart({...product.value, quantity: 1});
 addedToCart.value = true;
}

onMounted(async () => {
  product.value = await fetchProductById(currentProductId);
})


</script>

<style lang="scss" scoped>

.product {

 &__inner {
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: min-content;
  column-gap: 70px;
  row-gap: 30px;

  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
 }

 &__title {
  margin-bottom: 0;
 }

 &__info {
  max-width: 600px;
  justify-self: center;
  row-gap: 15px;
  grid-auto-rows: min-content;
  
  @media screen and (max-width: 768px) {
    justify-self: start;
    max-width: 100%;
  }
 }

 &__summary {
  row-gap: 10px;
 }

 &__img {
  justify-self: center;


  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
 }
}

</style>
