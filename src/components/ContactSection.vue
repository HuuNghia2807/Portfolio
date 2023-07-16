<template>
  <section class="contact" id="contact">
    <h2 class="title">Contact <span>Me!</span></h2>

    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="input-box">
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Subject" />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <span class="btn">Send Message</span>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  .title {
    margin-bottom: 3rem;
  }
  form {
    max-width: 70rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;

    .input-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .input-box input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      font-size: 1.6rem;
      color: var(--text-color);
      background: var(--second-bg-color);
      border-radius: 0.8rem;
      margin: 0.7rem 0;
      resize: none;
      font-family: var(--font) !important;
    }

    .input-box input {
      width: 49%;
    }
    .btn {
      margin-top: 2rem;
    }
  }
}

// Responsive css

@media (max-width: 991px) {
  .contact {
    min-height: auto;
  }
}

@media (max-width: 450px) {
  .contact form .input-box input {
    width: 100%;
  }
}
</style>
