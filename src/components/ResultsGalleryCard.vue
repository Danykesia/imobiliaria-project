<template>
  <div class="box">
    <img class="result-img" :src="image">
    <h2><a href="#">{{title}}</a></h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
h2 a {
  margin-top: 0.8rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(18, 78, 102);

  &:hover {
  color: rgb(88, 98, 112);
  }
}
p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: rgb(43, 43, 43);
  text-align: center;
  text-decoration: underline;
}

.box {
  width: 100%;
  margin: 0 0 20px;
  overflow: hidden;
  break-inside: avoid;
  border: 2px solid transparent;
  transition: transform .3s;

  &:hover {
    box-shadow: 1px 7px 8px 0px #0000003b;
  }
}

.result-img {
  width: 100%;
  height: 200px;
  vertical-align: top;
}

           @media (max-width: 575px) {
            .result-img {
              width: 100%;
              height: 100px;
              vertical-align: top;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .result-img {
              width: 100%;
              height: 100px;
              vertical-align: top;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .result-img {
              width: 100%;
              height: 200px;
              vertical-align: top;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .result-img {
              width: 100%;
              height: 200px;
              vertical-align: top;
            }
          }
          @media (min-width: 1200px) {
            .result-img {
              width: 100%;
              height: 200px;
              vertical-align: top;
            }
          }
</style>
