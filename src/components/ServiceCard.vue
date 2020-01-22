<template>
  <div class="col col-3 services_list">
    <font-awesome-icon :icon="icon"/>
    <h2>{{title}}</h2>
    <p>
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
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

.col-3 {
    width: 33.3333%;
}

h2 {
  margin-top: 1.2rem;
  margin-bottom: 1rem;
}

.services {
  background-color: rgb(243, 239, 234);
  text-align: center;

  &_list {
  display: inline-block;
  padding: 1rem;
  margin-bottom: 2rem;
  }
}

.svg-inline--fa.fa-w-18, .svg-inline--fa.fa-w-20 {
  font-size: 4rem;
  color: rgb(75, 155, 155);
}

          @media (max-width: 575px) {
            .col {
                width: 100%;
            }
            .col-1 {
                width: 100%;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .col {
                width: 100%;
            }
            .col-1 {
                width: 100%;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .col {
                width: 100%;
            }
            .col-1 {
                width: 100%;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .col-3 {
                width: 33,3333%;
            }
          }
          @media (min-width: 1200px) {
            .col-3 {
                width: 33,3333%;
            }
          }
</style>
