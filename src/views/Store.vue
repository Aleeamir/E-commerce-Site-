<template>
    <div class="cat">
        <div>
            <Sidebar />
        </div>
        <div class="upper">
            <div class="upper-text">
                <h1>Here are all available accessories</h1>
                <p>
                    Indulge in elegance and empowerment with our curated collection of female products at our store.
                    Discover
                    fashion-forward apparel, premium beauty essentials, and empowering accessories designed to celebrate the
                    strength
                    and individuality of every woman. Elevate your style and embrace your uniqueness with us today</p>
            </div>
            <div class="lower-image">
                <div class="product-container">
                    <div style="display: flex; flex-direction: row; flex-wrap: wrap;" v-if="products.length">
                        <Product v-for="product in products" :key="product.id" :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Product from '@/components/Store/Product.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    name: 'Store',
    components: {
        Product,
        Sidebar
    },
    data() {
        return {
            products: []
        };
    },
    created() {
        const getProducts = () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(response => {
                    this.products = response;
                    console.log(response);
                });
        };
        getProducts();
    },
};
</script>
<style scoped>
.upper-text {
    margin-top: 30px;
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


@media only screen and (max-width: 600px) {
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