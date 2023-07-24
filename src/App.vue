<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
 <div class="site-wrapper">

  <TheHeader />
  
  <div class="site-container">
   <main class="main">
     <RouterView />
   </main>
  </div>


 </div>
  
</template>

<style scoped>

</style>
