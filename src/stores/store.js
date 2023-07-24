
import { defineStore } from 'pinia';
import { useProductsFetchGet } from '@/services/useProductsFetchGet';
import { useProductFetchById } from '@/services/useProductFetchById';

export const useStore = defineStore('store', {
  state: () => ({
    products: [],
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    loading: false,
    error: null
  }),

  
  getters: {

    cartTotal() {
      const total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return `${total.toFixed(0)}`;
    },
    
    
    cartAmount() {
      return this.cartItems.length;
    },

    isItemInCart: (state) => (itemId) => {
      return state.cartItems.some(item => item.id === itemId);
    }
  },

  actions: {
    async fetchProducts() {
      try {
        this.loading = true;
        this.products = await useProductsFetchGet();
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },

    async fetchProductById(itemId) {
      try {
        this.loading = true;
        return await useProductFetchById(itemId);
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },

    addToCart(product) {
      this.cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },

    removeFromCart(itemId) {
      const itemIndex = this.cartItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        this.cartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    },

    updateProductQuantity(itemId, quantity) {
      const itemIndex = this.cartItems.findIndex(item => item.id === itemId);
        const itemByIndex = this.cartItems[itemIndex];  

      if (itemIndex !== -1) {
        itemByIndex.quantity = quantity;
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    }
  },
});
