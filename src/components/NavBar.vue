<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const navList = ref([
  {
    link: "/",
    title: "Home",
    id: "#home",
  },
  {
    link: "/about",
    title: "About",
    id: "#about",
  },
  {
    link: "/skills",
    title: "Skills",
    id: "#skills",
  },
  {
    link: "/portfolio",
    title: "Portfolio",
    id: "#portfolio",
  },
  {
    link: "/contact",
    title: "Contact",
    id: "#contact",
  },
]);
const section = ref<HTMLElement[]>();
const navLinks = ref<Element[]>();
const isMenu = ref(true);

const handleScroll = () => {
  section.value?.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if ((top > offset || top == offset) && top < offset + height) {
      navLinks.value?.forEach((link) => {
        link.classList.remove("active");
        document.querySelector(`.item[href*=${id}]`)?.classList.add("active");
      });
    }
  });
  isMenu.value = true;
};

onMounted(() => {
  section.value = [...document.querySelectorAll("section")];
  navLinks.value = [...document.querySelectorAll(".item")];
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="nav">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </router-link>
    <i
      :class="['pi', isMenu ? 'pi-align-justify' : 'pi-times']"
      id="menu-icon"
      @click="isMenu = !isMenu"
    ></i>
    <div :class="['nav-items', !isMenu && 'active']">
      <a class="item" v-for="nav in navList" :href="nav.id" :key="nav.id">
        <span>{{ nav.title.toUpperCase() }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  .logo {
    img {
      width: 12rem;
    }
  }

  #menu-icon {
    font-size: 3.6rem;
    color: var(--text-color);
    display: none;
    cursor: pointer;
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
      color: var(--text-color);
      margin: 0 0.75rem;
      font-size: 1.7rem;
      padding: 0.5rem 1rem;
    }
    .item:hover,
    .item.active {
      color: var(--main-color);
    }
  }
}

// Responsive css

@media (max-width: 991px) {
  .nav {
    padding: 2rem 3%;
  }
}

@media (max-width: 768px) {
  .nav {
    #menu-icon {
      display: block;
    }
    .nav-items {
      position: absolute;
      display: block;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 3%;
      background: var(--bg-color);
      border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      display: none;

      .item {
        display: block;
        font-size: 2rem;
        margin: 3rem 0;
      }
    }
    .nav-items.active {
      display: block;
    }
  }
}
</style>
