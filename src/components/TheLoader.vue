<template>
 <div class="loader"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.loader {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 border: 6px solid #f3f3f3;
 border-top: 6px solid var(--dark-color); 
 border-radius: 50%;
 width: 40px;
 height: 40px;
 animation: spin 2s linear infinite;
}

@keyframes spin {
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
}

</style>