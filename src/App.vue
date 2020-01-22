<template>
  <div id="app" class="h-100">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.h-100 {
   height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
}

        /*Extra small devices */
        @media (max-width: 575px) {
            .container {
                width: 100%;
                max-width: 575px;
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }
        /*Small devices (landscape phones, 576px e maiores)*/
        @media (min-width: 576px) and (max-width: 767px) {
            .container {
                width: 100%;
                max-width: 767px;
                padding-left: 2rem;
                padding-right: 2rem;
        }

        /*Medium devices (tablets, 768px e maiores)*/
        @media (min-width: 768px) and (max-width: 991px) {
            .container {
                width: 100%;
                max-width: 991px;
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }

        /*Large devices (desktops, 992px e maiores)*/
        @media (min-width: 992px) and (max-width: 1199px) {
            .container {
                width: 100%;
                max-width: 1199px;
                padding-left: 3rem;
                padding-right: 3rem;
            }
        }

        /*Extra large devices (large desktops, 1200px  e maiores)*/
        @media (min-width: 1200px) {
            .container {
                width: 100%;
                max-width: 5000px;
                padding-left: 3rem;
                padding-right: 3rem;
            }
        }
    }
</style>
