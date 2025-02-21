import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useLikedStore = defineStore("liked", () => {
  const liked = ref([]);
  if (localStorage.getItem("liked") !== null) {
    liked.value = JSON.parse(localStorage.getItem("liked"));
  }
  watch(liked, (change) => {
    localStorage.setItem("liked", JSON.stringify(change));
  }, 
  { deep: true })
  const addToLiked = (product) => {
      const item = liked.value.find((p) => p.id === product.id);
      if (!item) {
        liked.value.push({ ...product });
      }
  };
  const removeFromLiked = (productId) => {
      liked.value = liked.value.filter((p) => p.id !== productId);
  };
  return {liked, addToLiked, removeFromLiked}
})