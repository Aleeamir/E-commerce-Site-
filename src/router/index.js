import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessoriesPage from '../views/Accessories.vue'
import WomenPage from '../views/Women.vue'
import Store from '../views/Store.vue'
import AboutUs from '../views/About.vue'
import ContactUs from '../views/Contact.vue'
import Amount from '../views/Amount.vue'
import Home from '../views/HomeView.vue';
import Men from '../views/Men.vue'
import Sidebar from '../components/Sidebar.vue'
import ProductDetails from '../views/ProductDetails.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Accessories',
      name: 'Accessories',
      component: AccessoriesPage
    },
    {
      path: '/Women',
      name: 'Women',
      component: WomenPage
    },
    {
      path: '/Men',
      name: 'men',
      component: Men
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/About',
      name: 'About',
      component: AboutUs
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactUs
    },
    {
      path: '/Amount',
      name: 'Amount',
      component: Amount
    },
    { path: '/product/:id', name: 'productDetails', component: ProductDetails, props: true },
  ]

})
export default router 