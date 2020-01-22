<template>
  <div class="col col-content">
    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam qui, dicta, atque
      facilis odit dignissimos numquam nulla ipsa quidem blanditiis non saepe. Iusto quae
      illum, vel veritatis asperiores labore ipsam?
    </p>
    <p>
      illum, vel veritatis asperiores labore ipsam?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam qui, dicta, atque
      facilis odit dignissimos numquam nulla ipsa quidem blanditiis non saepe. Iusto quae
      illum, vel veritatis asperiores labore ipsam?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam qui, dicta, atque
      facilis odit dignissimos numquam nulla ipsa quidem blanditiis non saepe. Iusto quae
    </p>
    <p>
      illum, vel veritatis asperiores labore ipsam?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam qui, dicta, atque
      facilis odit dignissimos numquam nulla ipsa quidem blanditiis non saepe. Iusto quae
      illum, vel veritatis asperiores labore ipsam?
    </p>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  padding-bottom: 1.5rem;
  text-align: left;
}
p {
  margin-top: 0.8rem;
  font-size: 1rem;
  text-align: left;
}

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

.col-content {
    width: 70%;
    margin-top: 2rem;
}

          @media (max-width: 575px) {
            .col {
                width: 100%;
            }
            .col-content {
                width: 100%;
                padding: 0;
            }
          }
           @media (min-width: 576px) and (max-width: 767px) {
            .col {
                width: 100%;
            }
            .col-content {
                width: 100%;
                padding: 0;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .col {
                width: 100%;
            }
            .col-content {
                width: 100%;
                padding: 0;
            }
          }
          @media (min-width: 992px) and (max-width: 1199px) {
            .col {
                width: 100%;
            }
            .col-content {
                width: 100%;
                padding: 0;
            }
          }
          @media (min-width: 1200px) {
            .col {
                width: 100%;
            }
            .col-content {
                width: 70%;
                padding: 0;
            }
          }
</style>
