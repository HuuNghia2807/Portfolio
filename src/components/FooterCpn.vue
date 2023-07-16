<template>
  <footer class="footer">
    <div class="footer-text">
      <p>© 2022-2023 NHN Frontend Developer. All rights reserved.</p>
    </div>
    <div class="footer-icon-top">
      <a href="#home"> <i class="pi pi-arrow-up"></i> </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background: var(--second-bg-color);

  .footer-text p {
    font-size: 1.6rem;
  }
  .footer-icon-top a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--main-color);
    border-radius: 0.8rem;
    transition: 0.5s ease;

    &:hover {
      box-shadow: 0 0 1rem var(--main-color);
    }
    i {
      font-size: 1.6rem;
      color: var(--second-bg-color);
    }
  }
}

// Responsive css

@media (max-width: 991px) {
  .footer {
    padding: 2rem 3%;
  }
}

@media (max-width: 365px) {
  .footer {
    flex-direction: column-reverse;

    p {
      text-align: center;
      margin-top: 2rem;
    }
  }
}
</style>
