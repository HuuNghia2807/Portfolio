<script setup lang="ts">
import { reactive } from "vue";

const info = reactive({
  name: "NGUYEN HUU NGHIA",
  job: "And I'm a",
  intro:
    "Passionate frontend developer creating captivating user experiences through innovative design and seamless functionality. Let's bring your vision to life!",
  socials: [
    {
      link: "https://www.facebook.com/nhnghia404",
      icon: "pi-facebook",
    },
    {
      link: "#",
      icon: "pi-github",
    },
    {
      link: "#",
      icon: "pi-linkedin",
    },
  ],
});
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, My name is</h3>
      <h1>{{ info.name }}</h1>
      <h3 class="job">{{ info.job }} <span>Frontend Developer</span></h3>
      <p>{{ info.intro }}</p>
      <div class="social-media">
        <a
          :href="social.link"
          v-for="(social, i) in info.socials"
          :key="social.icon + i"
        >
          <i :class="`pi ${social.icon}`" />
        </a>
      </div>
      <span class="btn">Download CV</span>
    </div>
    <div class="home-img">
      <img src="@/assets/images/avt-01.jpg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  .home-content {
    flex: 1;
    h3 {
      font-size: 3.2rem;
      font-weight: 700;
    }
    .job {
      margin-bottom: 2rem;
      span {
        color: var(--main-color);
      }
    }
    h1 {
      font-size: 5.6rem;
      font-weight: 700;
      line-height: 1.3;
    }
    p {
      line-height: 2.2rem;
      font-size: 1.6rem;
    }
    .social-media {
      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background: transparent;
        border: 0.2rem solid var(--main-color);
        border-radius: 50%;
        font-size: 2rem;
        color: var(--main-color);
        margin: 3rem 1.5rem 3rem 0;
        transition: 0.5 ease;

        &:hover {
          background: var(--main-color);
          color: var(--second-bg-color);
          box-shadow: 0 0 1rem var(--main-color);
        }
      }
    }
  }
  .home-img {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 35vw;
    }
  }
}

// Responsive css

@media (max-width: 768px) {
  .home {
    flex-direction: column;

    .home-content {
      h3 {
        font-size: 2.6rem;
      }
      h1 {
        font-size: 5rem;
      }
    }

    .home-img img {
      width: 65vw;
      margin-top: 4rem;
    }
  }
}

@media (max-width: 365px) {
  .home {
    .home-img img {
      width: 80vw;
    }
  }
}
</style>
