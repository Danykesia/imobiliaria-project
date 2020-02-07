<template>
  <div class="container-grid" v-if="filteredResults.length > 0">
    <ResultsGalleryCard
      v-for="(result, index) in filteredResults"
      :key="index"
      :image="result.image"
      :title="result.title"
      :description="result.description" />
  </div>
  <h2 class="no_results" v-else>No results found =/</h2>
</template>

<script>
import { mapState } from 'vuex';
import ResultsGalleryCard from '@/components/ResultsGalleryCard.vue';

export default {
  components: {
    ResultsGalleryCard,
  },
  computed: {
    ...mapState({
      results: state => state.results,
    }),
    filteredResults() {
      const query = this.$route.query.q;
      if (!query || query.trim().length === 0) {
        return this.results;
      }
      return this.results.filter(item => item.title.toLowerCase().includes(query.toLowerCase())
        || item.description.toLowerCase().includes(query.toLowerCase()));
    },
  },
};
</script>
<style lang="scss" scoped>
.container-grid {
  width: 90vw;
  margin: 2rem auto;
  columns: 4;
  column-gap: 1.5rem;
}

.no_results {
  text-align: center;
  width: 100%;
  padding: 5rem 0;
}

           @media (max-width: 575px) {
            .container-grid {
              width: 90vw;
              margin: 2rem auto;
              columns: 2;
              column-gap: 1.5rem;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .container-grid {
              width: 90vw;
              margin: 2rem auto;
              columns: 2;
              column-gap: 1.5rem;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .container-grid {
              width: 90vw;
              margin: 2rem auto;
              columns: 2;
              column-gap: 1.5rem;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .container-grid {
              width: 90vw;
              margin: 2rem auto;
              columns: 3;
              column-gap: 1.5rem;
            }
          }
          @media (min-width: 1200px) {
            .container-grid {
              width: 90vw;
              margin: 2rem auto;
              columns: 4;
              column-gap: 1.5rem;
            }
          }
/* conteiner */
// .container-grid  {
//     width: 1200px;
//     margin-left: auto;
//     margin-right: auto;
//     padding: 0 20px;
// }
//     @media (min-width: 1170px) {
//         .container {
//             max-width: 1170px;
//             padding: 0;
//         }
//     }

// /* linha */
// .row {
//     margin-left: -5px;
//     margin-right: -5px;
// }
//     .row:before,
//     .row:after {
//         content: "";
//         display: table;
//     }
//     .row:after {
//         clear: both;
//     }

// /* colunas */
// .col {
//     display: inline-block;
//     vertical-align: top;
//     min-height: 1px;
//     padding-left: 5px;
//     padding-right: 5px;
//     width: 100%;
//     margin-right: -4px;
//     *zoom: 1;
//     *display: inline;
// }
//     /* duas colonas */
//     @media (min-width: 480px) {
//         .col-2 {
//             width: 50%;
//         }
//     }

//     /* tres colunas */
//     @media (min-width: 728px) {
//         .col-3 {
//             width: 33.3333%;
//         }
//     }

//     /* quatro colunas */
//     @media (min-width: 992px) {
//         .col-4 {
//           width: 25%;
//         }
//     }

//     /* sidebar */
//     @media (min-width: 992px) {
//         .col-content {
//             width: 60%;
//         }

//         .col-sidebar {
//            width: 40%;
//         }
//     }


// /* USAR APENAS PARA DEMOSTRAÇÂO */
// .teste {
//     background: #f5d5fe;
//     padding: 5px;
//     text-align: center;
//     margin: 2px 0;
//     color: #fff;
//     border: 1px solid red;
//     width: 100%;
//     height: 100%;
// }

// .result-image{
//   border: 1px solid green;
//   background-image: url(../assets/property3.jpg)
// }
// .big {
//     height: 50px;
// }
</style>
