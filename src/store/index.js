import Vue from 'vue';
import Vuex from 'vuex';
import property from '../assets/property.jpg';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';
import property4 from '../assets/property4.jpg';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    results: [
      {
        image: property,
        title: 'Title example 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 1',
      },
      {
        image: property2,
        title: 'Title example 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fuga. 2',
      },
      {
        image: property3,
        title: 'Title example 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 3',
      },
      {
        image: property4,
        title: 'Title example 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fuga. 4',
      },
      {
        image: property,
        title: 'Title example 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fuga. 1',
      },
      {
        image: property2,
        title: 'Title example 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 2',
      },
      {
        image: property3,
        title: 'Title example 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fuga. 3',
      },
      {
        image: property4,
        title: 'Title example 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 4',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
