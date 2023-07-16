<script setup lang="ts">
import { ref } from "vue";

const listPrj = ref([
  {
    img: "prj-01.jpg",
    title: "Frontend Developer",
    name: "DATA ANALYST PORTAL",
    dis: "A product used to analyze data records coming off from communication devices.",
  },
  {
    img: "prj-02.jpg",
    title: "Frontend Developer",
    name: "SALARY & INVOICE TRACKING",
    dis: "A product used by the DG head at TMA to manage employee salaries and invoices with foreign customers.",
  },
  {
    img: "prj-03.jpg",
    title: "Fullstack Developer",
    name: "CHAIR MANAGEMENT",
    dis: "A product used by TMA to manage seats for employees in the company.",
  },
  {
    img: "prj-04.jpg",
    title: "Fullstack Developer",
    name: "E-COMMERCE SELLING SHOES",
    dis: "A product used to buy and sell shoes online.",
  },
  {
    img: "prj-05.jpg",
    title: "Frontend Developer",
    name: "POKEMON FLIP GAME",
    dis: "A product used to play games about flipping entertainment.",
  },
  {
    img: "prj-06.jpg",
    title: "Frontend Developer",
    name: "PORTFOLIO",
    dis: "A product used to display personal information.",
  },
]);
</script>

<template>
  <section class="portfolio" id="portfolio">
    <h2 class="title">Latest <span>Project</span></h2>
    <div class="portfolio-container">
      <div
        class="portfolio-box"
        v-for="(prj, i) in listPrj"
        :key="prj.name + i"
      >
        <img :src="require(`@/assets/images/${prj.img}`)" alt="" />
        <div class="portfolio-layer">
          <h4>{{ prj.name }}</h4>
          <p>{{ prj.dis }}</p>
          <span><i class="pi pi-external-link"></i></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
  background: var(--second-bg-color);

  .title {
    margin-bottom: 4rem;
  }
  .portfolio-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 2.5rem;
  }

  .portfolio-box {
    position: relative;
    border-radius: 2rem;
    box-shadow: 0 0 1rem var(--bg-color);
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
      object-fit: cover;
      transition: 0.5s ease;
    }
    .portfolio-layer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.1), var(--main-color));
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 0 3rem;
      transform: translateY(100%);
      transition: 0.5s ease;

      h4 {
        font-size: 2rem;
      }
      p {
        font-size: 1.6rem;
        margin: 0.3rem 0 1rem;
        line-height: 2rem;
      }
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 3.8rem;
        height: 3.8rem;
        background: var(--text-color);
        border-radius: 50%;
        cursor: pointer;

        i {
          font-size: 1.4rem;
          color: var(--second-bg-color);
        }
      }
    }
    &:hover .portfolio-layer {
      transform: translateY(0);
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
}

// Responsive css

@media (max-width: 1300px) {
  .portfolio {
    min-height: auto;
    padding-bottom: 7rem;
    .portfolio-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .portfolio {
    .title {
      margin-bottom: 3rem;
    }
    .portfolio-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 617px) {
  .portfolio {
    .portfolio-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
