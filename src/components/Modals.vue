<script setup>
import {useLikedStore} from "../stores/likedStore"
import { useCartStore } from "../stores/productsStore";
import { useUserStore } from "@/stores/userStore";
import deleteIcon from "@/assets/icons/delete-button-svgrepo-com.svg"
import { ref } from "vue";

const cartStore = useCartStore();
const likedStore = useLikedStore();
const userStore = useUserStore();

const login = () => {
  const loginInput = document.getElementById("nameInput")
  const name = loginInput.value.trim();
  if(name !== ""){
    userStore.addUser(name);
  }
}

const disconnect = () => {
  userStore.removeUser();
}

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
          <div v-if="userStore.user">
            <div class="text-primary d-flex align-items-center">
            <img src="../assets/photos/account-offline.svg" style="height: 50px;">
            <h5>Username</h5>
          </div>
          <div class="d-flex flex-column gap-3 my-3">
            <a href="#">Votre adresse</a>
            <a href="#">Votre mode de paiement</a>
            <a href="#">Vos commandes</a>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button type="button" class="btn btn-secondary" @click="disconnect">Deconnecter</button>
          <button type="button" class="btn btn-primary">Modifier</button>
        </div>
        </div>
          <div v-else >
            <div class="d-flex flex-column align-items-center">
              <h5 class="text-primary">Vous n'etez pas connecte</h5>
              <div class="d-flex flex-column">
                <div class="col-12 d-flex flex-column mb-3">
                  <input class="rounded mb-3" type="text" placeholder="Votre nom" id="nameInput">
                  <input class="rounded " type="password" placeholder="Mot de pass">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="login" class="btn btn-primary">Connecter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></template>