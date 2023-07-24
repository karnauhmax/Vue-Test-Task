import { createRouter, createWebHashHistory } from 'vue-router';
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
import HomePage from "@/views/HomePage.vue";
import ProductPage from "@/views/ProductPage.vue";
import CartPage from "@/views/CartPage.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/product/:id', component: ProductPage, name: "Product",
  
  //handling scenario when user can change product's route to invalid from the main page

   async beforeEnter(to, from, next) {
        const store = useStore();
        const { products } = storeToRefs(store);

        //page reload case
        if (products.value.length === 0) {
          await store.fetchProducts();
        }

        const idToCheck = to.params.id;
        const itemToCheck = products.value.findIndex(item => item.id == idToCheck);

        if (products.value[itemToCheck]) {
          next();
        } else {
          next('/404')
        }
    },
  },
    { path: '/cart', component: CartPage, name: "Cart" },
    { path: "/:pathMatch(.*)*", component: PageNotFound, name: "Not Found" }
  ],

  //handling scenario when user clicks at the bottom products and being scrolled up to the start of the product page
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 })
    })
  }
})


export default router
