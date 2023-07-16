<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillSection from "@/components/SkillSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterCpn from "@/components/FooterCpn.vue";
</script>

<template>
  <div class="home">
    <NavBar />
    <HomeSection />
    <AboutSection />
    <SkillSection />
    <PortfolioSection />
    <ContactSection />
    <FooterCpn />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
