<template>
  <div class="description">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <img :src="product.image" alt="Product Image" />
    <h2> {{ product.price }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {}, 
    };
  },
  created() {
    this.fetchProductDetails(this.$route.params.id);
  },
  
  methods: {
    async fetchProductDetails(productId) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
        this.product = product;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    },
  },
};
 </script>
<style scoped>
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.description h1 {
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-align: center;
  padding-top: 20px;
}
.description p {
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-align: center;
  padding-top: 20px;
  padding-left: 25%;
  padding-right: 25%;
}
.description img {
  width: 200px;
  height: 200px;
  border-radius: 40px;
  margin: 0 auto;
  display: block;
  padding: 10px;
}
.description h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: yellow;
  text-align: center;
  padding-top: 20px;
}
</style>