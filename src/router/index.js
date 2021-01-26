import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import CarsPage from '../pages/CarsPage.vue'
import HousesPage from '../pages/HousesPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
