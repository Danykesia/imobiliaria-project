<template>
  <img class="img-service" :src="picture"/>
</template>

<script>
export default {
  props: {
    picture: String,
  },
};
</script>

<style lang="scss" scoped>
.img-service {
  width: 250px;
  border-radius: 1rem 0.5rem 1rem 0.5rem;
  border: 1px solid rgb(74, 100, 102);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:nth-child(odd) {
    margin-left: 7rem;
  }
}

          @media (max-width: 575px) {
            .img-service {
                display: none;
            }
          }
          @media (min-width: 576px) and (max-width: 767px) {
            .img-service {
                display: none;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .img-service {
                display: none;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .img-service {
                display: none;
            }
          }
          @media (min-width: 1200px) {
            width: 250px;
            border-radius: 1rem 0.5rem 1rem 0.5rem;
            border: 1px solid rgb(74, 100, 102);

            &:not(:last-child) {
              margin-bottom: 1rem;
            }

            &:nth-child(odd) {
              margin-left: 7rem;
            }
          }
</style>
