<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute();
const isActiveLink = (path) => {
  return route.path === path ? 'nav-link active' : 'nav-link';
};
</script>
<template>
    <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-6 col-sm-6">
            <div class="d-flex align-items-center p-3 rounded-3 bg-secondary">
                <input type="text" class="form-control w-75 rounded-3" placeholder="Search">
                <button class="btn btn-md btn-primary ms-3">Search</button>
            </div>
        </div>
        <div class=" col-lg-2 col-md-3 col-sm-6 d-flex justify-content-end">
          <div class="col-md-12 col-sm-12 align-items-center p-2 rounded-3 bg-secondary d-flex px-0 justify-content-between" >
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cartModal">
              <img src="../assets/icons/cart.svg" class="icon">
            </button>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#likedModal">
              <img src="../assets/icons/heart-svgrepo-com.svg" class="icon">
            </button>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#accountModal"> 
              <img src="../assets/icons/account-svgrepo-com.svg" class="icon"> 
            </button>
          </div>
        </div>
    </div>
    <ul class="nav nav-pills mb-3 py-3">
            <li class="nav-item">
            <RouterLink to="/" :class="isActiveLink('/')">
                <p>Accueil</p>
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="'/category/men\'s clothing'" :class="isActiveLink('/category/men\'s clothing')">
                <p>Homme</p>
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="'/category/women\'s clothing'" :class="isActiveLink('/category/women\'s clothing')">
                <p>Femme</p>
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/category/jewelery" :class="isActiveLink('/category/jewelery')">
                <p>Bijoux</p>
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/category/electronics" :class="isActiveLink('/category/electronics')">
                <p>Electronics</p>
            </RouterLink>
        </li>
        </ul>
</template>
<style scoped>
.icon {
    height: 30px;
}
@media (min-width: 770px) and (max-width: 1330px) {
    .icon{
        height: 20px;
    }
}
</style>
<!--

-->