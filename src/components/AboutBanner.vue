<template>
  <div class="about-banner">
    <h1>About us</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: #2c3e50;
  font-size: 2.5rem;
}

.about-banner {
  display: flex;
  flex-direction: column;
  height: 25vh;
  background-image: linear-gradient(to right bottom,
    rgba(166, 206, 204, 0.8),
    rgba(22, 51, 110, 0.8)),
  url(../assets/property3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  background-attachment: fixed;
  margin-top: 60px;
}
</style>
