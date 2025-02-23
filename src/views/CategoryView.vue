<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/productsStore';
import { useLikedStore } from '@/stores/likedStore';

const cartStore = useCartStore();
const likedStore = useLikedStore();

const route = useRoute();
const productsContainer = ref([]);  

onMounted(() => {
    loadData(route.params.catName);
});

watch(() => route.params.catName, (newCategory) => {
    loadData(newCategory);
});

const loadData = (category) => {
    fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then((data) => {
            productsContainer.value = data.filter(product => product.category === category);
        });
};

const addToLiked = (product) => {
    likedStore.addToLiked(product);
};

const addToCart = (product) => {
    cartStore.addToCart(product);
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="product in productsContainer" :key="product.id" class="col-md-3 col-sm-6">
                <div class="card d-flex flex-column justify-content-between my-3">
                    <img class="card-img-top" :src="product.image" :alt="product.title" style="width: 100%;" />
                    <div class="card-body" style="min-height: 200px; display: flex; flex-direction: column;">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <div class="d-flex justify-content-between" style="margin-top: auto;">
                            <RouterLink :to="`/product/${product.id}`" class="btn btn-sm btn-primary">Go to product</Routerlink>
                            <div class="d-flex">
                                <button @click="addToLiked(product)" class="btn btn-sm border d-flex align-items-center" type="button">
                                    <img src="@/assets/icons/heart-svgrepo-com.svg" style="height: 25px; width: 25px;">
                                </button>
                                <button @click="addToCart(product)" class="btn btn-sm border d-flex align-items-center" type="button">
                                    <img src="@/assets/icons/cart.svg" style="height: 25px; width: 25px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>
