<template>
  <section class="container">
    <h1>Our Services</h1>
    <div class="row">
      <ServiceCard title="Service one" icon="house-damage" description="Lorem ipsum dolor, sit amet
      consectetur adipisicing elit.
      Porro, voluptatum voluptate incidunt
      olores sequi nisi numquam facere libero temporibus.Exercitationem
      libero nobis culpa magnam quas
      eum rem rerum aliquam beatae!"/>
      <ServiceCard title="service two" icon="home" description="Lorem ipsum dolor, sit amet
      consectetur adipisicing elit.
      Porro, voluptatum voluptate incidunt
      olores sequi nisi numquam facere libero temporibus.Exercitationem
      libero nobis culpa magnam quas
      eum rem rerum aliquam beatae!"/>
      <ServiceCard title="Service three" icon="warehouse" description="Lorem ipsum dolor, sit am
      consectetur adipisicing elit.
      Porro, voluptatum voluptate incidunt
      olores sequi nisi numquam facere libero temporibus.Exercitationem
      libero nobis culpa magnam quas
      eum rem rerum aliquam beatae!"/>
    </div>
  </section>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';

export default {
  components: {
    ServiceCard,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  color: rgb(18, 168, 106);
  border-bottom: 4px solid rgb(61, 201, 143);
  text-transform: uppercase;
  font-size: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
}
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
