<script setup>
import {useLikedStore} from "../stores/likedStore"
import { useCartStore } from "../stores/productsStore";
import deleteIcon from "@/assets/icons/delete-button-svgrepo-com.svg"
const cartStore = useCartStore();
const likedStore = useLikedStore();

</script>
<template>
<div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="cartModalLabel">Votre panier</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="cartModalBody">
          <ul >
            <li v-for="item in cartStore.cart" :key="item.id" class="">
              <div class="row ">
                <div class="col-10 text-primary">{{ item.title }}</div>
                <div class="col-2">
                  <button @click="cartStore.removeFromCart(item.id)" class="btn">
                    <img :src="deleteIcon" style="height:20px;">
                  </button>
                </div> 
              </div>
            </li>
        </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button type="button" class="btn btn-primary">Payer</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="likedModal" tabindex="-1" aria-labelledby="likedModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="likedModalLabel">Vous aimez</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="likedModalBody">
          <ul >
            <li v-for="item in likedStore.liked" :key="item.id" class="">
              <div class="row ">
                <div class="col-10 text-primary">{{ item.title }}</div>
                <div class="col-2">
                  <button @click="likedStore.removeFromLiked(item.id)" class="btn">
                    <img :src="deleteIcon" style="height:20px;">
                  </button>
                </div> 
              </div>
            </li>
        </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="accountModalLabel">Votre Compte</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="accountModalBody">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button type="button" class="btn btn-secondary">Deconnecter</button>
          <button type="button" class="btn btn-primary">Modifier</button>
        </div>
      </div>
    </div>
  </div></template>