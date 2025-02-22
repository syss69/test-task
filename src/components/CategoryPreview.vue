<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="row pt-3">
            <div class="col-md-3 col-sm-6">
                <div class="card p-5">
                    <img src="../assets/photos/K10K108229_CHW_main.webp" class="card-img-top" alt="product-img">
                    <h5 class="card-title">Homme</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis justo. Phasellus eget malesuada eros, vel eleifend enim..</p>
                    <button class="btn btn-light">
                        <RouterLink :to="'/category/men\'s clothing'">Explorer</RouterLink>
                    </button>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card p-5">
                    <img src="../assets/photos/jd_product_list.webp" class="card-img-top" alt="product-img">
                    <h5 class="card-title">Femme</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis justo. Phasellus eget malesuada eros, vel eleifend enim..</p>
                    <button class="btn btn-light">
                        <RouterLink :to="'/category/women\'s clothing'">Explorer</RouterLink>
                    </button>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card p-5 border-primary">
                    <img src="../assets/photos/bracelet-jonc-amour.jpg" class="card-img-top" alt="product-img">
                    <h5 class="card-title">Bijoux</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis justo. Phasellus eget malesuada eros, vel eleifend enim..</p>
                    <button class="btn btn-light">
                        <RouterLink :to="'/category/jewelery'" >Explorer</RouterLink>
                    </button>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card p-5">
                    <img src="../assets/photos/electronic.webp" class="card-img-top" alt="product-img">
                    <h5 class="card-title">Electronics</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis justo. Phasellus eget malesuada eros, vel eleifend enim..</p>
                    <button class="btn btn-light">
                        <RouterLink :to="'/category/electronics'">Explorer</RouterLink>
                    </button>
                </div>
            </div>
        </div>
</template>
<style scoped>
@media (min-width: 761px) and (max-width: 1100px) {
    .card-img-top{
    display: none;
}
}
</style>