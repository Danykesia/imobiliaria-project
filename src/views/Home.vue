<template>
  <div class="home">
    <Banner/>
    <Services/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Services from '@/components/Services.vue';

export default {
  name: 'home',
  components: {
    Banner,
    Services,
  },
};
</script>
