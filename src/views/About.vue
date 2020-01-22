<template>
  <div class="about">
    <AboutBanner />
    <div class="row container">
      <AboutText/>
      <Gallery/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutBanner from '@/components/AboutBanner.vue';
import AboutText from '@/components/AboutText.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'about',
  components: {
    AboutBanner,
    AboutText,
    Gallery,
  },
};
</script>

<style lang="scss" scoped>
.row {
    margin-left: -5px;
    margin-right: -5px;
}
    .row:before,
    .row:after {
        content: "";
        display: table;
    }
    .row:after {
        clear: both;
    }
</style>
