import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  if (localStorage.getItem("cart") !== null) {
    cart.value = JSON.parse(localStorage.getItem("cart"));
  }
  watch(cart, (change) => {
    localStorage.setItem("cart", JSON.stringify(change));
  }, 
  { deep: true })
  const addToCart = (product) => {
      const item = cart.value.find((p) => p.id === product.id);
      if (!item) {
        cart.value.push({ ...product});
      }
  };
  const removeFromCart = (productId) => {
      cart.value = cart.value.filter((p) => p.id !== productId);
  };
  return {cart, addToCart, removeFromCart}
})