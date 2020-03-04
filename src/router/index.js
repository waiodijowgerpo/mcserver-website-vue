import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Shop from './views/Shop.vue';
import PaymentRules from './views/PaymentRules.vue';
import NotFound from './views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Strona główna',
    component: Home
  },
  {
    path: '/shop',
    name: 'Sklep',
    component: Shop
  },
  {
    path: '/paymentrules',
    name: 'Regulamin płatności usług',
    component: PaymentRules,
  },
  {
    path: '*',
    name: 'Nie znaleziono strony',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
