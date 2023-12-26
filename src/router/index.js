import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessoriesPage from '../views/Accessories.vue'
import WomenPage from '../views/Women.vue'
import MenPage from '../views/Men.vue'
import AboutUs from '../views/About.vue'
import ContactUs from '../views/Contact.vue'
import Amount from '../views/Amount.vue'
import Home from '../views/HomeView.vue';

// ********** for product add ***************
// import ProductList from '@/components/ProductList.vue';
// import ProductDescription from '@/views/ProductDescription.vue';

// import ProductDetails from '../components/ProductDetails.vue';
// import MenProducts from "@/views/MenProducts.vue"
// import ProductList from "@/views/ProductList.vue"
import ProductDetails from '../views/ProductDetails.vue';

// import CategoryPage from '@/views/CategoryPage.vue';

// const routes = [
//   {
//     path: '/men',
//     name: 'Men',
//     component: CategoryPage,
//     props: { category: 'Men' },
//   },
//   {
//     path: '/women',
//     name: 'Women',
//     component: CategoryPage,
//     props: { category: 'Women' },
//   },
//   {
//     path: '/kids',
//     name: 'Kids',
//     component: CategoryPage,
//     props: { category: 'Kids' },
//   },

// ];

// const routes = [
//   {
//     path: '/',
//     name: 'ProductList',
//     component: ProductList,
//   },
//   {
//     path: '/product/:id',
//     name: 'ProductDescription',
//     component: ProductDescription,
//     props: true,
//   },
// ];

// ***************888

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
      name: 'Men',
      component: MenPage
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
    // {
    //   path: '/men',
    //   name: 'MenProducts',
    //   component: MenProducts,
    // },
    // {
    //   path: '/women',
    //   name: 'ProductList',
    //   component: ProductList,
    // },
    // {
    //   path: '/product/:productId',
    //   name: 'productDetails',
    //   component: ProductDetails,
    // },

  ]

})
export default router 