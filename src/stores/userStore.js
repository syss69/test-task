import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  if (localStorage.getItem("user") !== null) {
    user.value = JSON.parse(localStorage.getItem("user"));
  }
  watch(user, (change) => {
    localStorage.setItem("user", JSON.stringify(change));
  }, 
  { deep: true })
  const addUser = (userData) => {
      const item = user.value
      if (!item) {
        user.value = userData;
      }
  };
  const removeUser = () => {
      user.value = null;
  };
  return {user, addUser, removeUser}
})