<template>
  <div class="product-card grid">

    <RouterLink class="product-card__img" :to="productPageLink">
      <img :src="item.image" :alt="item.title" />
    </RouterLink>

    <RouterLink class="product-card__title clamp" :to="productPageLink">
      {{ item.title }}
    </RouterLink>

    <div class="product-card__summary grid align-self-end">
      <strong class="product-card__price">{{ item.price }}$</strong>


      <CartBtn @click="addToCart" :added-to-cart="isItemInCart(item.id)" />

    </div>

  </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import { useStore } from "@/stores/store.js";
import { storeToRefs } from 'pinia';

import CartBtn from '@/components/CartBtn.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const { item } = toRefs(props);

const store = useStore();

const {isItemInCart} = storeToRefs(store);




const addToCart = () => {
  store.addToCart({...item.value, quantity: 1});
};

const productPageLink = computed(() => {
  return { path: `/product/${item.value.id}` };
});


</script>

<style scoped lang="scss">
.product-card {
  padding: 20px;
  padding: clamp(0.625rem, 0.481rem + 0.64vw, 1.25rem);
  border: 1px solid var(--dark-color);
  border-radius: var(--border-radius-primary);
  grid-template-rows: repeat(2, min-content) 1fr;
  row-gap: 10px;
  transition: var(--transition-duration) box-shadow ease;

  &__img {
    text-align: center;
    aspect-ratio: 16 / 9;
    
    img {
      height: 250px;
      object-fit: contain;
    }

    @media (any-hover: hover) {
      &:hover + .product-card__title {
        text-decoration: underline;
      }
    }
  }

  &__summary {
    row-gap: 10px;
  }

  &__title {
    -webkit-line-clamp: 1;

    
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
