<template>
 <section class="not-found">
  <div class="container">
   <div class="not-found__inner grid centered text-uppercase">
    <p class="not-found__text font-bold">404</p>
    <p class="not-found__text font-bold">Page Not Found :(</p>
   </div>
  </div>
 </section>
</template>

<script setup></script>

<style lang="scss" scoped>

.not-found {
 height: 100%;


 &__inner {
  row-gap: 25px;
 }

 &__text {
  font-size: clamp(3rem, 1.364rem + 8.18vw, 5rem);
 }
}

</style>