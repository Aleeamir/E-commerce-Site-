<script setup>
import ProductList from '@/views/ProductList.vue';

</script>
<template>
  <div class="cat">
    <div class="side">
      <div class="search">
      <input type="text" v-model="input" placeholder="Search Here..."/></div>
      <h1 >Filter of price</h1>
      <h1>Categories</h1>
      <div class="info">
        <RouterLink to="/Accessories" style="text-decoration: none; color: white; font-size: 15px;">Accessories
        </RouterLink>
        <span style="padding-left: 70px;">(17)</span> <br>
        <RouterLink to="/Men" style="text-decoration: none; color: white; font-size: 15px;padding-right: 125px;">Men
        </RouterLink>
        <span style="padding-right: 5px;">(8)</span><br>
        <RouterLink to="Women" style="text-decoration: none; color: white; font-size: 15px;padding-right: 100px;">Women
        </RouterLink>
        <span>(11)</span>
      </div>
      <div class="brands">
        <h1>Our Best Sellers</h1>
      </div>
      <div class="best-sellers-container">
        <div v-for="seller in bestSellers" :key="seller.id" class="seller-profile">
          <img :src="seller.logo" alt="Seller Logo" class="logo" />
          <h3 class="name">{{ seller.name }}</h3>
          <div class="rating">
            <span v-for="star in 5" :key="star" class="star-icon">
              <i class="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="upper">
      <div class="upper-text">
        <h1>Here are all brands available for Women</h1>
        <p>
          Indulge in elegance and empowerment with our curated collection of female products at our store. Discover
          fashion-forward apparel, premium beauty essentials, and empowering accessories designed to celebrate the
          strength
          and individuality of every woman. Elevate your style and embrace your uniqueness with us today</p>
      </div>
      <div class="lower-image">
        <ProductList :products="products" />
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import ProductList from '@/views/ProductList.vue';

export default {
  data() {
    return {
      bestSellers: [
        { id: 1, name: 'Denim Jeans', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyKs0yceI6gmDaIk53SF3XY1K2VEzF6Kd2GpG8CELKQMfB5-brFuDULqiFw&s' },
        { id: 2, name: 'Black Hoodies', logo: 'data:image/jpeg;base64,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' },
        { id: 3, name: 'Bracelet', logo: 'data:image/png;base64,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' },
      ],
    };
  },
};
</script>
<style scoped>
.upper-text {
  margin-top: 30px;
}
.search {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}
.side h1 {
  font-size: 20px;
   color: white; 
   font-family: 'Roboto', sans-serif; 
   padding-top: 20px;
}
.brands h1 {
  color: white; 
  font-family: 'Roboto', sans-serif; 
  font-size: 25px; 
  padding-top: 30px;
}
.upper h1 {
  font-family: 'Roboto', sans-serif;
  color: white;
  color: white;
  text-align: center;
}

.upper p {

  color: white;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  margin-left: 20%;
  margin-right: 20%;
}

.cat {
  display: flex;
}


.upper {
  display: flex;
  flex-direction: column;
}

.lower-image {
  max-width: 100%;
  height: auto;
}

.side {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgb(10, 10, 114);
  margin-left: 20px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
}

.side h2 {
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
}

.info {
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  padding-top: 50px;
  padding: 20px;

}

.best-sellers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}

.seller-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 70px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.name {
  font-size: 10px;
  color: #f8f5f5;
  text-align: center;
  font-family: 'Roboto', sans-serif;

}

.rating {
  display: flex;
}

.star-icon {
  color: #f1f505;
  margin-right: 5px;
  font-size: 15px;
}

.brands {
  padding-left: 30px;
}
@media only screen and (max-width: 600px) {
  .search {
    margin-top: 10px;
    float: right;
    padding: 1px;
    /* margin-top: -22px; */
    margin-right: 5px;
    border: none;
    font-size: 13px;
    margin-left: 2px;
  }
  .side h1 h2 {
    font-size: 15px;
    color: white;
    font-family: Roboto, sans-serif;
    padding-top: 20px;
    margin-left: 5px;
  }
  .brands h1 {
    font-size: 20px;
  }
  .upper-text h1 {
    font-size: 18px;
  }
  .upper-text p {
    font-size: 12px;
  }
  .cat {
    display: flex;
    flex-direction: column-reverse;
    margin-right: 20px;
    
  }
}
</style>
