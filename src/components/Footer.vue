
<script>
export default {

}
</script>
<template>
  <footer class="footer">

    <div class="fifthview">
      <h5>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h5>
    </div>
    <section class="links-section">
      <div class="container">

        <div class="row-data">
          <div class="social-media-left">
            <h1>DNK</h1>
            <span>The best look anytime, anywhere</span>
          </div>

          <div class="first">
            <div class="links">
              <h6 class="fw-bold" style="font-size: 20px; color: white;">For Her</h6>
              <p><a href="#" class="text-reset">Women Jeans</a></p>
              <p><a href="#" class="text-reset">Tops and shirts</a></p>
              <p><a href="#" class="text-reset">Women Jackets </a></p>
              <p><a href="#" class="text-reset">Heals and Flats</a></p>
              <p><a href="#" class="text-reset">Women Accessories</a></p>
            </div>
          </div>

          <div class="second" style="margin-right: 60px;">
            <div class="links">
              <h6 class="fw-bold" style="font-size: 20px; color: white;">For Him</h6>
              <p><a href="#" class="text-reset">Men Jeans</a></p>
              <p><a href="#" class="text-reset">Men Jackets</a></p>
              <p><a href="#" class="text-reset">Men Shoes</a></p>
              <p><a href="#" class="text-reset">Men Pents</a></p>
              <p><a href="#" class="text-reset">Men Accessories</a></p>
            </div>
          </div>

          <div class="third">
            <div class="links">
              <h6 class="fw-bold" style="font-size: 20px; color: white;">Subscribe</h6>
              <div class="search"><input type="text" v-model="input" placeholder="Search Here..." /></div>
              <button class="button-1" v-on:click="">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>



<style scoped>
.search {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}

.social-media-left h1 {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: white;
}

.social-media-left span {
  font-family: 'Roboto', sans-serif;
  color: white;
}

h5 {
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  color: white;
}

.row-data {
  display: flex;
  flex-direction: row;
  padding-top: 2%;
  padding-left: 10%;
}

.first {
  margin-right: 60px;
}

.footer {
  background-image: url(src/assets/Images/footer.avif);
}

.fifthview {
  margin-top: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 26px;
  background-color: rgb(10, 10, 114);

}

.footer {
  background-color: #ecf4f6;
  color: #150202;
  padding: 20px 0;
  text-align: center;

}

.footer .social-media-section {
  display: flex;
  align-items: center;
  margin: 13px;
  padding: 0;
  box-sizing: border-box;
}

.social-media-section {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
}

.social-media-left {
  margin-right: 70px;
}

.social-media-icons a {
  color: #fff;
  margin-right: 5px;
  font-size: 18px;
}

.links-section {
  margin-top: -58%px;
}

.container {
  max-width: 1500px;
  margin: 0 auto;
}

.content {
  margin-bottom: 20px;
}

.links h6 {
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  color: white;


}

.links p {
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 0px;

}

.links a {
  text-decoration: none;
  color: white;

}

.copyright-section {
  margin-top: 20px;
}

.button-1 {
  align-items: center;
  background-clip: padding-box;
  background-color: rgb(10, 10, 114);
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 20;
  margin-left: 70px;
  margin-right: 20px;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-1:hover,
.button-1:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-1:hover {
  transform: translateY(-1px);
}

.button-1:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}

@media screen and (max-width: 1000px) {
  .fw-bold h6 {
    font-size: 5px;
  }

  .links p {
    font-size: 12px;
  }

  .search {
    float: right;
    padding: 3px;
    margin-top: 8px;
    margin-right: 16px;
    border: none;
    font-size: 17px;
  }

  @media screen and (max-width: 695px) {
    .row-data {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 367px) {
    .fifthview h5 {
      font-size: 20px;
    }
    .search {
      margin-right: 62px;
    }
    .button-1 {
      border-radius: 10rem;
      font-size: 12px;
      margin-left: -24px;
      margin-top: 10px;
    }
  }
}</style>
