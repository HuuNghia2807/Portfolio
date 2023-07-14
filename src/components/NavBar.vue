<script setup lang="ts">
import { ref } from "vue";

const navList = ref([
  {
    link: "/",
    title: "Home",
    id: "home",
  },
  {
    link: "/about",
    title: "About",
    id: "about",
  },
  {
    link: "/service",
    title: "Service",
    id: "service",
  },
  {
    link: "/contact",
    title: "Contact",
    id: "contact",
  },
]);
</script>

<template>
  <div class="nav">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </router-link>
    <div class="nav-items">
      <router-link to="/" class="item" v-for="nav in navList" :key="nav.id">
        <span>{{ nav.title.toUpperCase() }}</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--height-header);
  padding: 0 10rem;
  background: none;
  background-image: none;
  z-index: 4;

  .logo {
    img {
      width: 6rem;
    }
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
      position: relative;
      text-decoration: none;
      color: var(--black-color);
      margin: 0 0.75rem;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;

      span {
        position: relative;
        text-align: center;
        z-index: 2;
        transition: all 0.3s ease-in-out;
      }
    }
    .item::after {
      content: " ";
      width: 0%;
      height: 100%;
      background: var(--primary-color);
      border-radius: 5px;
      position: absolute;
      transition: all 0.4s ease-in-out;
      right: 0;
      top: 0;
    }
    .item:hover::after {
      right: auto;
      left: 0;
      width: 100%;
    }
    .item:hover span {
      color: var(--white-color);
    }
  }
}
</style>
