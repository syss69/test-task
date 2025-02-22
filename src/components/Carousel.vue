<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/photos/pexels-pixabay-220769.jpg" style="height: 36rem; width: 100%;">
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>Example headline.</h1>
                  <p class="opacity-75">This is an example. Link goes to men's clothing page</p>
                  <RouterLink :to="'/category/men\'s clothing'">
                    <p class="btn btn-lg btn-primary">Learn more</p>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/photos/pexels-tirachard-kumtanom-112571-450055.jpg" style="height: 36rem; width: 100%;">
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>Another example headline.</h1>
                  <p>This is an example. Link goes to women's clothing page</p>
                  <RouterLink :to="'/category/women\'s clothing'">
                    <p class="btn btn-lg btn-primary">Learn more</p>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/photos/pexels-raulling-30786905.jpg" style="height: 36rem; width: 100%;">
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>This is an example. Link goes to jewerly page</p>
                  <RouterLink to="/category/jewelery">
                    <p class="btn btn-lg btn-primary">Browse gallery</p>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
</template>