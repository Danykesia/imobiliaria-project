<template>
  <header class="banner">
    <div class="text-box">
      <h1 class="text-box_primary">
        Lorem ipsum dolor
      </h1>
      <p class="text-box_secondary">
        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet
        lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet
      </p>
      <router-link to="/about" class="btn">
        Learn more
        <font-awesome-icon icon="chevron-right"/>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-image: linear-gradient(to right bottom,
    rgba(166, 206, 204, 0.8),
    rgba(22, 51, 110, 0.8)),
  url(../assets/property2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  background-attachment: fixed;
  margin-top: 60px;
}

.text-box {
  color: rgb(243, 239, 234);
  // margin-top: -20rem;

  &_primary {
    text-transform: uppercase;
    font-size: 3.5rem;
  }

  &_secondary {
    padding: 2rem 8rem;
    font-size: 1.2rem;
  }
}

.btn {
  &:link,
  &:visited {
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 100px;
    padding: 1rem 2.5rem;
    color:rgb(243, 239, 234);
    display: inline-block;
    background-color: rgb(18, 168, 106);
    margin-top: 4rem;
  }

  &:hover {
    background-color: rgb(61, 201, 143);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.199);
  }
}

.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    margin-left: 0.2rem;
}

        @media (max-width: 575px) {
          .banner {
            height: 60vh;
            max-width: 575px;
            width: 100%;
            background-size: 575px;
            background-attachment: none;
          }
          .text-box {
            color: rgb(243, 239, 234);

            &_primary {
              text-transform: uppercase;
            font-size: 2rem;
            margin-top: 1rem;
            }

            &_secondary {
            padding: 1rem 2rem;
            font-size: 1rem;
            margin-top: 1rem;
            }
          }

          .btn {
            &:link,
            &:visited {
              font-size: 0.8rem;
              padding: 1rem 2rem;
              margin-top: 2rem;
              border: none;
            }

            &:hover {
              box-shadow: 0 0 0 0;
            }
          }
        }
        @media (min-width: 576px) and (max-width: 767px) {
          .banner {
            height: 60vh;
            max-width: 767px;
            width: 100%;
            background-size: 767px;
            background-attachment: none;
          }
          .text-box {
            color: rgb(243, 239, 234);

            &_primary {
              text-transform: uppercase;
            font-size: 2rem;
            margin-top: 1rem;
            }

            &_secondary {
            padding: 1rem 2rem;
            font-size: 1rem;
            margin-top: 1rem;
            }
          }

          .btn {
            &:link,
            &:visited {
              font-size: 0.8rem;
              padding: 1rem 2rem;
              margin-top: 2rem;
              border: none;
            }

            &:hover {
              box-shadow: 0 0 0 0;
            }
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .banner {
            height: 50vh;
            max-width: 991px;
            width: 100%;
            background-size: 991px;
            background-attachment: none;
          }
          .btn {
            &:hover {
              box-shadow: 0 0 0 0;
            }
          }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .banner {
            height: 90vh;
            max-width: 1199px;
            width: 100%;
            background-size: 1199px;
          }
        }
        @media (min-width: 1200px) {
          .banner {
            height: 90vh;
            max-width: 2000px;
            width: 100%;
          }
        }
</style>
