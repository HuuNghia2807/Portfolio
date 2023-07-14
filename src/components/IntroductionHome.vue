<script setup lang="ts">
import { reactive } from "vue";

const infor = reactive({
  name: "NGUYEN HUU NGHIA",
  major: "Web Developer",
  contact: [
    {
      title: "nhn280700@gmail.com",
      icon: "pi-envelope",
    },
    {
      title: "(+84) 859-255-277",
      icon: "pi-phone",
    },
  ],
});
</script>
<template>
  <div class="introduction">
    <div class="infor">
      <div class="greeting">
        <span>HELLO, MY NAME IS</span>
        <div class="line" />
      </div>
      <div class="name-infor">
        <span>{{ infor.name }}</span>
      </div>
      <div class="major-infor">
        <span>{{ infor.major }}</span>
      </div>
      <div class="contact-infor">
        <div
          class="contact-items"
          v-for="info in infor.contact"
          :key="info.title"
        >
          <i :class="`pi ${info.icon}`"></i>
          <span>{{ info.title.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div class="avatar">
      <div class="img">
        <img src="@/assets/images/avt-01.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduction {
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 0 12rem;
  margin-top: var(--height-header);

  .infor {
    flex: 1;

    .greeting {
      margin-top: 9rem;
      font-size: 0.9rem;
      color: #758398;
      .line {
        border-bottom: 2px solid;
        width: 3rem;
        margin-top: 1rem;
      }
    }

    .name-infor {
      margin-top: 4rem;
      font-size: 3rem;
      font-family: "Playfair Display", serif;
      font-weight: 800;
    }
    .major-infor {
      font-size: 2.0588235294118rem;
      font-family: "Playfair Display", serif;
      font-weight: 800;
      color: #758398;
    }
    .contact-infor {
      margin-top: 6rem;

      .contact-items {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        i {
          font-size: 1.4rem;
          color: var(--primary-color);
        }
        span {
          margin-left: 2rem;
        }
      }
    }
  }

  .avatar {
    flex: 1;
    margin-top: 2.5rem;
    img {
      width: calc(100% + 2rem);
      border-radius: 50%;
      vertical-align: middle;
      text-align: center;
    }
  }
}
</style>
