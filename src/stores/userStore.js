import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  let storedUser = localStorage.getItem("user")
  if ( storedUser !== null) {
    user.value = JSON.parse(storedUser);
  }
  watch(user, (change) => {
    if(change){
        localStorage.setItem("user", JSON.stringify(change));
    }else{
        localStorage.removeItem("user");
    }
  }, { deep: true })

  const addUser = (userData) => {
      if (!user.value) {
        user.value = userData;
      }
  };
  const removeUser = () => {
      user.value = null;
  };
  return {user, addUser, removeUser}
})