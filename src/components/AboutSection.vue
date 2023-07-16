<script setup lang="ts">
import { ref } from "vue";

const objtive = ref(
  `A front-end developer full of moving spirits is looking for valuable opportunities 
    that I am capable of positioning myself and making such significant devotion. Thanks to self-learning capabilities and acumen, 
    I am willing to broaden my horizons and get immediately accustomed to the challenging environment that will help me climb the career ladder.
    One of my greatest strengths lies in my ability to adapt quickly to new technologies and environments. 
    I thrive in challenging situations that push me to broaden my horizons and continuously expand my skill set. 
    As the front-end landscape evolves rapidly, I am dedicated to staying at the forefront of industry trends and advancements.`
);
</script>

<template>
  <section class="about" id="about">
    <h2 class="title">About <span>Me</span></h2>
    <div class="about-img">
      <img src="@/assets/images/avt-02.jpg" alt="avt-2" />
      <span class="circle-spin"> </span>
    </div>
    <div class="about-content">
      <h3>Frontend Developer!</h3>
      <p>{{ objtive }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--second-bg-color);
  padding-bottom: 6rem;

  //   h2 {
  //     font-size: 5rem;
  //     margin-bottom: 3rem;
  //     text-align: center;

  //     span {
  //       color: var(--main-color);
  //     }
  //   }

  .about-img {
    position: relative;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      height: 90%;
      object-fit: cover;
      border-radius: 50%;
      border: 0.2rem solid var(--main-color);
    }

    .circle-spin {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-top: 0.2rem solid var(--second-bg-color);
      border-bottom: 0.2rem solid var(--second-bg-color);
      border-left: 0.2rem solid var(--main-color);
      border-right: 0.2rem solid var(--main-color);
    }
  }
  .about-content {
    text-align: center;

    h3 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.8rem;
      margin: 2rem 0 3rem;
    }
  }
}
</style>
