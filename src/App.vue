<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
 <div class="container-fluid bg-dark text-light px-5 pt-3">
  <Header/>
  <RouterView/>
 </div>
</template>

<style scoped>

</style>
