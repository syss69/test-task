<script setup>
import Header from './components/Header.vue';
import Modals from './components/Modals.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
 <div class="container-fluid bg-dark text-light px-5 pt-3">
  <Header/>
  <Modals />
  <RouterView/>
  <Footer />
 </div>
</template>

<style scoped>

</style>
