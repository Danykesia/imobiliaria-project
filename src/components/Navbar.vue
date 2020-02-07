<template>
  <nav id="navbar" class="navbar container">
    <img id="logo" src="../assets/favicon.svg" alt="Logo" class="navbar_logo" />
    <ul class="navbar_links">
      <li>
        <router-link to="/" active-class="active" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/about" active-class="active" exact>About</router-link>
      </li>
      <li>
        <div class="search-box">
          <input
            class="search-box--txt"
            type="text"
            placeholder="Search..."
            v-model="input"
            @keyup.enter="search"/>
          <button class="search-box--btn" @click="search">
            <font-awesome-icon icon="search" />
          </button>
        </div>
        <div class="search-box-mob">
          <input class="search-box-mob--txt" type="text" placeholder="Search..." />
          <router-link class="search-box-mob--btn" to="/search">
            <font-awesome-icon icon="search" />
          </router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  mounted() {
    window.onscroll = function scrollFunction() {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.background = 'transparent';
        document.getElementById('logo').style.width = '50px';
        document.getElementById('navbar').style.boxShadow = 'none';
      } else {
        document.getElementById('navbar').style.background = 'rgb(219, 79, 14)';
        document.getElementById('logo').style.width = '50px';
        document.getElementById('navbar').style.boxShadow = '0px 5px 8px 0px rgba(101, 82, 82, 0.71)';
      }
    };
  },
  methods: {
    search() {
      const path = `/search?q=${this.input}`;
      if (this.$route.fullPath !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap" rel="stylesheet">');
ul {
  display: flex;
  align-items: center;
}

li,
a {
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  list-style-type: none;
  color: rgb(233, 200, 161);
}

.navbar {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgb(219, 79, 14);
  position: fixed;
  z-index: 1000;
  transition: 0.3s;
  box-shadow: 0px 5px 8px 0px rgba(101, 82, 82, 0.71);


  &_logo {
    text-align: left;
    width: 50px;
    cursor: pointer;
    color: green;
  }

  &_links li {
    padding: 0 1.2rem;

    &:last-child {
      padding-right: 0;
    }

    & a {
      transition: all 0.3s ease 0s;

      &:hover {
        color: #2c3e50;
      }
    }
  }
}

.active {
  color: #2c3e50;
}

.search-box {
  position: relative;
  transform: translate (-50%, -50%);
  background: rgb(18, 168, 106);
  height: 40px;
  border-radius: 40px;
  padding: 10px;

  &:hover > &--txt {
    width: 240px;
    padding: 0 6px;
  }

  &:hover > &--btn {
    color: #ccc;
  }

  &--btn {
    color: #2c3e50;
    float: right;
    width: 40px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
  }

  &--txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 1rem;
    transition: 0.4s;
    width: 0px;
  }
}

.search-box-mob {
  position: relative;
  background: rgb(18, 168, 106);
  height: 40px;
  border-radius: 40px;
  padding: 10px;

  &--btn {
    color: #2c3e50;
    float: right;
    width: 40px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 1rem;
    transition: 0.4s;
    width: 0px;
  }
}

@media (max-width: 575px) {
  .navbar {
    z-index: 1000;
    left: 0;
    right: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    &_links li {
      padding: 0 1.2rem;

      & a {
        transition: none;
        font-size: 0.9rem;
      }
    }
  }
  .search-box {
    display: none;
  }

  .search-box-mob {
    height: 37px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .navbar {
    &_links li {
      padding: 0 1.2rem;

      & a {
        transition: none;
      }
    }
  }
  .search-box {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .navbar {
    &_links li {
      padding: 0 1.2rem;

      & a {
        transition: none;
      }
    }
  }
  .search-box {
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .navbar {
    &_links li {
      padding: 0 1.2rem;

      & a {
        transition: none;
      }
    }
  }
  .search-box {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar {
    &_links li {
      padding: 0 1.2rem;
    }
  }
  .search-box-mob {
    display: none;
  }
}
</style>
