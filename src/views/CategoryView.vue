<script setup>
import Modals from '@/components/Modals.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import heartIcon from '@/assets/icons/heart-svgrepo-com.svg';
import cartIcon from '@/assets/icons/cart.svg';

const route = useRoute();
const cardClasses = "col-md-3 col-sm-6";
const productsContainer = ref(null); 
let products = [];

onMounted(() => {
    loadData(route.params.catName);
});

watch(() => route.params.catName, (newCategory) => {
    productsContainer.value.innerHTML = " "
    loadData(newCategory);
});

const loadData = (category) => {
    fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then((data) => {
            products = data.filter(data => data.category === category);
            let i = 0;
            let row = document.createElement("div");
            row.classList.add("row");
            productsContainer.value.appendChild(row); 
            products.forEach(product => {
                if (i === 4) {
                    row = document.createElement("div");
                    row.classList.add("row");
                    productsContainer.value.appendChild(row);
                    i = 0;
                }
                let newCard = createCard(product);
                row.appendChild(newCard);
                i++;
            });
        });
};

const createCard = (product) => {
    const cardColumn = document.createElement("div");
    cardColumn.classList.add(...cardClasses.split(" "));
    cardColumn.innerHTML = `
        <div class="card d-flex flex-column justify-content-between">
    <img class="card-img-top" src="${product.image}" alt="${product.title}" style="width: 100%;">
    <div class="card-body" style="min-height: 200px; display: flex; flex-direction: column;">
        <h5 class="card-title">${product.title}</h5>
        <div class="d-flex justify-content-between" style="margin-top: auto;">
            <a href="#" class="btn btn-sm btn-primary">Go to product</a>
            <div class="d-flex">
                <button class="btn btn-sm border d-flex align-items-center" type="button">
                    <img src="${heartIcon}" style="height: 25px; width: 25px;">
                </button>
                <button class="btn btn-sm border d-flex align-items-center" type="button">
                    <img src="${cartIcon}" style="height: 25px; width: 25px;">
                </button>
            </div>
        </div>
    </div>
</div>
    `;
    return cardColumn;
};
</script>

<template>
    <Modals />
    <div class="container px-0" ref="productsContainer">
    </div>
    <Footer />
</template>

<style scoped>
</style>