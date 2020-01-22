<template>
  <div class="col col-sidebar">
    <GalleryCard :picture="require('../assets/property3.jpg')"/>
    <GalleryCard :picture="require('../assets/property4.jpg')"/>
    <GalleryCard :picture="require('../assets/property2.jpg')"/>
  </div>
</template>

<script>
import GalleryCard from '@/components/GalleryCard.vue';

export default {
  components: {
    GalleryCard,
  },
};
</script>

<style lang="scss" scoped>
.col {
    display: inline-block;
    vertical-align: top;
    min-height: 1px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    margin-right: -4px;
    *zoom: 1;
    *display: inline;
}

.col-sidebar {
    width: 30%;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

          @media (max-width: 575px) {
            .col {
                width: 100%;
            }
            .col-sidebar {
                display: block;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .col {
                width: 100%;
            }
            .col-sidebar {
                display: block;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .col {
                width: 100%;
            }
            .col-sidebar {
                display: block;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .col {
                width: 100%;
            }
            .col-sidebar {
                display: block;
            }
          }
          @media (min-width: 1200px) {
            .col-3 {
                width: 33,3333%;
            }
          }
</style>
