
<template>
  <div class="product-container">
    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
      <div class="pro" v-for="product in products" :key="product.id" @click="navigateToProductDetails(product.id)">
        <div class="product-block">
          <img :src="product.image" alt="Product Image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    navigateToProductDetails(productId) {
      this.$router.push({ name: 'productDetails', params: { id: productId } });
    },
  },
  data() {
    return {
      products: [
        {
          id: 7,
          name: "Sneakers",
          price: "$49.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymgOcBfN6hcFTfL3ASyM8THte6evbv5GSKj44Pnwz2xd69-nwd_BtL4HrwZWvDfpSOF4&usqp=CAU",
        },
        {
          id: 8,
          name: "Sandles",
          price: "$49.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0supEl39Hqc-kWTcxw6T--aoyctyIYsVeffvx6XeAirK9sjGa6e2tNzF4IucNkAFo_4&usqp=CAU",
        },
        {
          id: 9,
          name: "Silk Dress",
          price: "$49.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D8kXrIhTGOWJxWMDWMXkuZ-3zjo19VSBbFSDHJ1v98ziFjJmfweLmkl6vdgDowoI7Dc&usqp=CAU",
        },
        {
          id: 10,
          name: "Party Dress",
          price: "$49.99",
          image: "https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-original-hand-drawn-dignified-red-evening-dress-dress-clothing-cartoon-elements-png-image_2626171.jpg",
        },
        {
          id: 11,
          name: "Kurta",
          price: "$49.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicrMsTiuC_6WBGcBlZWHX7nzLrpJkCpfz0d2rVXQn4A&s",
        },
        {
          id: 12,
          name: "Long Coat",
          price: "$49.99",
          image: "data:image/jpeg;base64,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",
        },
      ],
    };
  },
};
</script>
  
<style scoped>
.pro {
  padding: 20px;
  /* width: calc(100.33% - 13px); */

}

.product-container .pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.product-block {
  /* width: calc(33.33% - 20px); */
  margin: 10px;
  text-align: center;
}

.product-block img {
  width: 200px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 75px;
  padding: 20px;
  overflow: hidden;
  cursor: pointer;
}

.product-block h3 {
  margin-top: 10px;
  font-size: 16px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.product-block p {
  font-size: 14px;
  color: #888;
}

@media only screen and (max-width: 600px) {
  .product-block img {
    width: 150px;
    max-height: 100%;
    object-fit: cover;
    border-radius: 75px;
    padding: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  .product-container .pro {
    /* margin-left: -58px; */
    align-items: center;
  }

  .product-block h3 {
    margin-top: -2px;
    font-size: 16px;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  .product-block p {
    font-size: 14px;
    color: #888;
    text-align: center;
  }
}</style>