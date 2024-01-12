<!-- <template>
    <div>
      <h1>Here are brands available for {{ category }}</h1>
      <ProductList :category="category" :products="products" />
    </div>
  </template>
  
  <script setup>
  import ProductList from '@/components/ProductList.vue';
  
  const props = defineProps(['category']);
  
  
  
  const products = [
    
  ];
  </script>
   -->

   <!-- <template>
    <div>
      <h1>Here are brands available for {{ category }}</h1>
      <CategoryPage :category="category" :categoryProducts="products" />
    </div>
  </template>
  
  <script setup>
  import CategoryPage from '@/components/CategoryPage.vue';
  import { ref, onMounted } from 'vue';
  
  const category = ref('');
  const products = ref([]);
  
  onMounted(() => {
   
    fetchProducts(category.value);
  });
  
  async function fetchProducts(category) {
   
    const response = await fetch(`https://api.example.com/products?category=${category}`);
    const data = await response.json();
    products.value = data;
  }
  </script>
   -->