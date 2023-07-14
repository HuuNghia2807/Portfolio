<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import HomeBackground from "@/components/HomeBackground.vue";
import IntroductionHome from "@/components/IntroductionHome.vue";
</script>

<template>
  <div class="home">
    <NavBar />
    <div class="content">
      <section class="elementor-top-section">
        <HomeBackground />
        <IntroductionHome />
      </section>
      <section class="elementor-content-section">
        <div class="text">zzz</div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;

  .content {
    width: 100%;
  }
  .elementor-top-section {
    height: 100vh;
    // background-color: #f6f8fa;
  }

  .elementor-content-section {
    position: relative;
    top: 0;
    left: 0;
  }
  .text {
    height: 500px;
  }
}
</style>
