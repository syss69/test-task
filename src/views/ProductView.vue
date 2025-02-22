<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Rating from '../components/Rating.vue'
const route = useRoute();

const productData = ref({});
const productRating = ref({})

const loadProductInfo = (product) => {
    fetch(`https://fakestoreapi.com/products/${product}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
           productData.value = data;
        })
}

onMounted(() => {
    loadProductInfo(route.params.id);
})
</script>
<template>
    <div class="row text-primary d-flex justify-content-center">
        <div class="bg-white col-9 d-flex rounded-3" id="productContainer">
            <div class="col-6 border d-flex justify-content-center">
                <img class="productImage" :src="productData.image">
            </div>
            <div class="col-6 d-flex flex-column justify-content-between p-5">
                <h2>{{ productData.title }}</h2>
                <p>{{ productData.description }}</p>
                <div class="d-flex justify-content-between" id="cardBottom">
                    <Rating :rating="productData.rating" />
                    <h4>{{ productData.price }}</h4>
                    <div class="d-flex">
                        <button class="btn btn-sm border d-flex align-items-center" type="button" id="likeButton">
                            <img src="../assets/icons/heart-svgrepo-com.svg" style="height: 25px; width: 25px;">
                        </button>
                        <button class="btn btn-sm border d-flex align-items-center" type="button" id="addToCartButton">
                            <img src="../assets/icons/cart.svg" style="height: 25px; width: 25px;">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.productImage{
    max-width: 100%;
}
#productContainer{
    min-height: 600px;
    max-height: 70%;
}
@media (max-width: 1100px){
    #productContainer{
        flex-direction: column;
        align-items: center;
    }
    #cardBottom{
        flex-direction: column;
    }
}
</style>