<script setup lang="ts">
import { onMounted, reactive } from "vue";
import Typed from "typed.js";

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
      link: "https://github.com/HuuNghia2807",
      icon: "pi-github",
    },
    {
      link: "https://www.linkedin.com/in/nghia-nguyen-a76b74261/",
      icon: "pi-linkedin",
    },
  ],
});

const handleDownloadCV = async () => {
  try {
    const pdfUrl = "my_cv.pdf"; // Replace with the correct relative path to your PDF file
    const response = await fetch(pdfUrl);
    const blob = await response.blob();

    // Create a temporary anchor element for download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Nguyen_Huu_Nghia_FontendDev";

    // Trigger the download
    link.click();
  } catch (error) {
    console.error("Error fetching or downloading the PDF file:", error);
  }
};

onMounted(() => {
  new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, My name is</h3>
      <h1>{{ info.name }}</h1>
      <h3 class="job">{{ info.job }} <span class="multiple-text"></span></h3>
      <p>{{ info.intro }}</p>
      <div class="social-media">
        <a
          :href="social.link"
          v-for="(social, i) in info.socials"
          :key="social.icon + i"
          target="”_blank”"
        >
          <i :class="`pi ${social.icon}`" />
        </a>
      </div>
      <span class="btn" @click="handleDownloadCV">Download CV</span>
    </div>
    <div class="home-img">
      <div class="glowing-circle">
        <span></span>
        <span></span>
        <div class="image">
          <img src="@/assets/images/avt-01.jpg" alt="" />
        </div>
      </div>
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

    .glowing-circle {
      position: relative;
      width: 45rem;
      height: 45rem;
      background: yellowgreen;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: floatImage 4s ease-in-out infinite;

      &::after {
        content: "";
        position: absolute;
        width: 42.5rem;
        height: 42.5rem;
        background: var(--bg-color);
        border-radius: 50%;
      }

      span {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(#1967dc, var(--main-color));
        border-radius: 50%;
      }

      .image {
        position: relative;
        width: 43rem;
        height: 43rem;
        border-radius: 50%;
        z-index: 1;
        overflow: hidden;

        img {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          object-fit: cover;
          max-width: 43rem;
        }
      }
    }

    @keyframes floatImage {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-2.4rem);
      }
      100% {
        transform: translateY(0);
      }
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

    .home-img {
      .glowing-circle {
        margin-top: 4rem;
        .image img {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 365px) {
  .home {
    .home-img {
      .glowing-circle {
        width: 30rem;
        height: 30rem;

        .image {
          width: 28rem;
          height: 28rem;
          img {
            max-width: 28rem;
          }
        }
        &::after {
          content: "";
          width: 28rem;
          height: 28rem;
        }
      }
    }
  }
}
</style>
