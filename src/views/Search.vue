<template>
  <div class="search">
    <SearchContainer/>
    <Results/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchContainer from '@/components/SearchContainer.vue';
import Results from '@/components/Results.vue';

export default {
  name: 'search',
  components: {
    SearchContainer,
    Results,
  },
};
</script>
