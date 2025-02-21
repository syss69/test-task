<template>
    <div class="stars">
    <span v-for="n in 5" :key="n">
      <span v-if="n <= Math.floor(rating?.rate)">★</span>
      <span v-else-if="n - 0.5 <= rating?.rate">★</span>
      <span v-else>☆</span>
    </span>
  </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    rating: Object, 
  });
  </script>
  
  <style scoped>
  .stars {
    font-size: 34px; 
  }
  
  .filled {
    color: gold; 
  }
  </style>