<template>
  <footer class="container">
    <p>2019 - Todos os direitos reservados.</p>
    <div class="social">
      <a href="#"><font-awesome-icon class="social_icons" :icon="['fab', 'instagram']"/></a>
      <a href="#"><font-awesome-icon class="social_icons" :icon="['fab', 'facebook']"/></a>
      <a href="#"><font-awesome-icon class="social_icons" :icon="['fab', 'twitter']"/></a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(243, 239, 234);
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: auto;
  border-top: 1px solid #ccc;
}

p {
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
}

.social {
  font-size: 1.5rem;

  &_icons {
    margin-left: 0.8rem;
    color: rgb(75, 78, 78);
  }

  &_icons:hover {
    color:  rgb(18, 168, 106);
  }
}

@media (max-width: 575px) {
  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .social {
    font-size: 1rem;

    &_icons {
      margin-left: 0.5rem;
      color: rgb(75, 78, 78);
    }
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .social {
    font-size: 1rem;

    &_icons {
      margin-left: 0.5rem;
      color: rgb(75, 78, 78);
    }
  }
}
</style>
