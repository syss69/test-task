<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute();
const isActiveLink = (path) => {
  return route.path === path ? 'nav-link active' : 'nav-link';
};
</script>
<template>
    <div class="row d-flex justify-content-between align-items-center" id="firstLine">
        <div class="col-md-6 col-sm-12">
            <div class="d-flex align-items-center p-3 rounded-3 bg-secondary">
                <input type="text" class="form-control w-75 rounded-3" placeholder="Search">
                <button class="btn btn-md btn-primary ms-3">Search</button>
            </div>
        </div>
        <div class=" col-lg-2 col-md-3 col-sm-0 d-flex justify-content-end">
          <div class="col-md-12 col-sm-0 align-items-center p-2 rounded-3 bg-secondary d-flex px-0 justify-content-between" id="actionBtns">
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
    <div class="row">
        <div id="actionBtnsDropdown" class="d-flex justify-content-center align-items-center">
            <div class="dropdown w-auto" data-bs-auto-close="true">
                <button class="btn btn-secondary w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../assets/icons/menu-svgrepo-com.svg" class="icon">
                </button>
                <div class="dropdown-menu bg-secondary p-2" style="min-width: 100%;" aria-labelledby="dropdownMenuButton" >
                    <button type="button" class="btn mb-2" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <img src="../assets/icons/cart.svg" class="icon">
                    </button>
                    <button type="button" class="btn mb-2" data-bs-toggle="modal" data-bs-target="#likedModal">
                        <img src="../assets/icons/heart-svgrepo-com.svg" class="icon">
                    </button>
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#accountModal"> 
                        <img src="../assets/icons/account-svgrepo-com.svg" class="icon"> 
                    </button>
                </div>
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

@media (max-width: 770px ){
    #actionBtns{
        visibility: hidden;
    }
}

@media (min-width: 771px){
    #actionBtnsDropdown{
        visibility: hidden;
    }
}
</style>
<!--

-->