<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";

const skillInfo = ref([
  {
    title: "Programming Languages Skills",
    listSkill: [
      {
        name: "HTML, CSS",
        percent: "90%",
      },
      {
        name: "Javascript",
        percent: "80%",
      },
      {
        name: "Typescript",
        percent: "70%",
      },
      {
        name: "PHP",
        percent: "50%",
      },
      {
        name: "Java",
        percent: "50%",
      },
    ],
  },
  {
    title: "Personal Skills",
    listSkill: [
      {
        name: "Git",
        percent: "90%",
      },
      {
        name: "Figma",
        percent: "80%",
      },
      {
        name: "Communicate",
        percent: "100%",
      },
      {
        name: "Teamwork",
        percent: "100%",
      },
      {
        name: "Responsibility",
        percent: "100%",
      },
    ],
  },
]);
const listSkill = ref([
  {
    name: "HTML, CSS",
    width: "90%",
  },
  {
    name: "Javascript",
    width: "80%",
  },
  {
    name: "Typescript",
    width: "70%",
  },
  {
    name: "PHP",
    width: "50%",
  },
  {
    name: "Java",
    width: "50%",
  },
  {
    name: "Git",
    width: "90%",
  },
  {
    name: "Figma",
    width: "80%",
  },
  {
    name: "Communicate",
    width: "100%",
  },
  {
    name: "Teamwork",
    width: "100%",
  },
  {
    name: "Responsibility",
    width: "100%",
  },
]);

onMounted(() => {
  const balls = document.querySelectorAll(".ballon");
  const screenWidth = window.innerWidth - 300;
  const screenHeight = window.innerHeight - 100;
  const speed = 2;
  const circleSize = 160;
  let x = screenWidth / 2 - circleSize / 2;
  let y = screenHeight / 2 - circleSize / 2;
  let directionX = 1; // Initial X direction (1 for right, -1 for left)
  let directionY = 1; // Initial Y direction (1 for down, -1 for up)

  function moveCircle(ball: Element) {
    // Update circle position
    x += speed * directionX;
    y += speed * directionY;

    // Check boundaries
    if (x < 0 || x + circleSize > screenWidth) {
      directionX *= -1; // Reverse X direction on hitting boundaries
    }

    if (y < 0 || y + circleSize > screenHeight) {
      directionY *= -1; // Reverse Y direction on hitting boundaries
    }

    // Update circle position
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  }
  balls.forEach((ele) => {
    setInterval(() => moveCircle(ele), 80);
  });
});
</script>

<template>
  <section class="skills" id="skills">
    <h2 class="title">My <span>Skills</span></h2>
    <div class="skills-row">
      <!-- <div
        class="skills-column"
        v-for="(skill, i) in skillInfo"
        :key="skill.title + i"
        :id="`skills-column${i}`"
      >
        <h3 class="skills-title">{{ skill.title }}</h3>
        <div class="skills-box">
          <div class="skills-content">
            <div
              class="progress"
              v-for="(childSkill, i) in skill.listSkill"
              :key="childSkill.name + i"
            >
              <h3>
                {{ childSkill.name }} <span>{{ childSkill.percent }}</span>
              </h3>
              <div class="bar">
                <span :style="`width: ${childSkill.percent}`"></span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="ballon" v-for="skill in listSkill" :key="skill.name">
        <span class="text">{{ skill.name.toUpperCase() }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  min-height: 100vh;
  padding-bottom: 7rem;
  background-color: var(--bg-color);

  .skills-row {
    position: relative;
    display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    // gap: 5rem;
    // padding-top: 5rem;

    .ballon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 50%;
      // min-width: 14rem;
      // min-height: 14rem;
      width: 160px;
      height: 160px;

      span {
        color: red;
        font-size: 1.8rem;
        font-weight: 600;
        padding: 2rem;
      }
    }
    .skills-column {
      flex: 1 1 40rem;

      .skills-title {
        font-size: 2.5rem;
        margin: 0 0 1.5rem;
        text-align: start;
      }
      .skills-box {
        .skills-content {
          position: relative;
          border-left: 0.2rem solid var(--main-color);
          padding: 0.5rem 1.5rem;
        }
        .progress::before {
          content: "";
          position: absolute;
          top: 50%;
          width: 2rem;
          height: 2rem;
          left: -2.5rem;
          background: var(--main-color);
          border-radius: 50%;
        }
        .progress {
          position: relative;
          padding: 1rem 0;
          h3 {
            font-size: 1.7rem;
            display: flex;
            justify-content: space-between;
          }
          .bar {
            height: 2.5rem;
            border-radius: 0.6rem;
            border: 0.2rem solid var(--main-color);
            padding: 0.5rem;
            margin: 1rem 0;

            span {
              display: block;
              height: 100%;
              border-radius: 0.3rem;
              background: var(--main-color);
            }
          }
        }
      }
    }
  }
}
</style>
