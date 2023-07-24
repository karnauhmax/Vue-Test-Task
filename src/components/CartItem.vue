<template>
 <div class="cart__item grid align-items-center primary-border">


   <RouterLink :to="currentItemRoute" class="cart__img">
    <img :src="product.image" :alt="product.title">
   </RouterLink>

   <RouterLink :to="currentItemRoute" class="cart__name clamp">
    {{ product.title }}
   </RouterLink>

   <strong class="cart__price centered">
    {{ product.price }} $
   </strong>

   <QuantitySelector class="cart__quantity" v-model="quantity" @update:modelValue="quantityUpdate" />


   <button @click="removeFromCart" class="cart__delete">
    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="20px" height="20px" viewBox="0 0 482.428 482.429"
      xml:space="preserve">
    <g>
      <g>
        <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
          c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
          h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
          C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
          C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
          c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
          c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
          V115.744z"/>
        <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
          c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
        <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
          c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
        <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
          c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
      </g>
    </g>
    </svg>
   </button>

   
 </div>
</template>

<script setup>

import { toRefs, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from '@/stores/store';



import QuantitySelector from "@/components/QuantitySelector.vue"


const props = defineProps({
  product: {
    type: Object, 
    required: true
  }
})

const store = useStore();
const { product } = toRefs(props);

const quantity = ref(product.value.quantity);




const removeFromCart = () => {
  store.removeFromCart(product.value.id);
}

const quantityUpdate = (value) => {
  store.updateProductQuantity(product.value.id, value);
}

const currentItemRoute = computed(() => {
  return {path: `/product/${product.value.id}`};
})



</script>

<style lang="scss" scoped>

.cart__name {
  -webkit-line-clamp: 1;

  @media screen and (max-width: 576px) {
    grid-column: 2/4;
  }
}

.cart__item {
  grid-template-columns: 80px repeat(3, 1fr) 20px;
  column-gap: 20px;
  row-gap: 10px;
  padding: clamp(0.625rem, 0.553rem + 0.32vw, 0.938rem) clamp(0.938rem, 0.721rem + 0.96vw, 1.875rem);
  position: relative;
  min-height: 125px;


  @media screen and (max-width: 576px) {
    grid-template-columns: auto 1fr;
    column-gap: 10px;
  }  
}

.cart__img img {
  max-width: 80px;
  height: 80px;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}



.cart__delete {
  transition: var(--transition-duration) transform ease;

  @media screen and (max-width: 576px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (any-hover: hover) {
    &:hover {
      transform: rotate(15deg);
    }
  }
}

.cart__quantity {
  @media screen and (max-width: 576px) {
    justify-self: end;
  }
}


@media (any-hover: hover) {
  
  .cart__img:hover + .cart__name {
    text-decoration: underline;
  }

  .cart__name:hover {
    text-decoration: underline;
  }
}
</style>