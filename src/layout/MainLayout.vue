<script setup lang="ts">
import { onMounted } from "vue";
import { animateFunc } from "@/functions/common";

onMounted(() => {
  animateFunc(".home-content, .title", "top");
  animateFunc(".home-img, .portfolio-box, .contact form", "bottom");
  animateFunc(
    ".home-content h1, .about-img, .skills #skills-column0 , .progress .bar span",
    "left"
  );
  animateFunc(
    ".home-content p, .about-content p, .skills #skills-column1",
    "right"
  );
});
</script>

<template>
  <router-view />
</template>
