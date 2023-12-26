<template>
  <div class="about-us">
    <header class="top">
      <h1>About Our E-Commerce Store</h1>
      <p>Your one-stop destination for quality products and excellent customer service.</p>
    </header>

    <section class="company-section">
      <h1>Our store</h1>
      <p>
        Welcome to our online store, where we offer a wide range of products to meet your every need.
        Our mission is to provide quality goods with exceptional service to our valued customers.
      </p>
    </section>

    <section class="team-section">
      <h1>Meet Our Team</h1>
      <div class="team-member" v-for="member in team" :key="member.id">
        <img :src="member.avatar" alt="">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      team: [
        { id: 1, name: 'John Doe', role: 'Founder', avatar: 'src/assets/Images/ceo.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Marketing Manager', avatar: 'src/assets/Images/cfo.webp' },
      ],
    };
  },
};
</script>
  
<style scoped>
.top h1 {
  font-size: 40px;
  /* padding-bottom: 60px; */
}

.about-us {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  color: white;
  font-family: 'Roboto', sans-serif;
  /* font-size: 40px; */
}

.top {
  text-align: center;
  margin-bottom: 20px;
}

.company-section,
.team-section {
  margin-bottom: 40px;
}

.team-member {
  text-align: center;
  margin-bottom: 20px;
}

.team-member img {
  width: 229px;
  height: 214px;
  border-radius: 50%;
  object-fit: cover;
}
</style>