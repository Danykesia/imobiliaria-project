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
  height: 32vh;
  background-image: linear-gradient(to right bottom,
    rgba(166, 206, 204, 0.8),
    rgba(22, 51, 110, 0.8)),
  url(../assets/property3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  background-attachment: fixed;
  margin-top: 2.5rem;
}

 @media (max-width: 575px) {
            .about-banner{
              background-attachment: inherit;
              height: 20vh;
              max-width: 100%;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .about-banner{
              background-attachment: inherit;
              height: 20vh;
              max-width: 100%;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .about-banner{
              background-attachment: inherit;
              height: 20vh;
              max-width: 100%;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .about-banner {
              height: 32vh;
              background-attachment: inherit;
              max-width: 100%;
            }
          }
          @media (min-width: 1200px) {
            .about-banner {
              height: 32vh;
              max-width: 100%;
            }
          }
</style>
