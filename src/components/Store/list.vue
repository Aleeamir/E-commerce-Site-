<template>
    <div class="pro" @click="navigateToProductDetails(product.id)">
        <div class="product-block">
            <img :src="product.image" alt="Product Image" />
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        List: {
            type: Object
        }
    },
    methods: {
        navigateToProductDetails(productId) {
            this.$router.push({ name: 'productDetails', params: { id: productId } });
        },
    }
};
</script>
<style scoped>
.pro {
    padding: 20px;
    display: flex;
    flex-direction: row;
}
.product-container .pro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.product-block {
    margin: 10px;
    text-align: center;
}
.product-block img {
    width: 246px;
    height: 256px;
    /* object-fit: cover; */
    border-radius: 30px;
    overflow: hidden;
    object-fit: contain;
}
.product-block h3 {
    margin-top: 30px;
    font-size: 16px;
    color: white;
    font-family: 'Roboto', sans-serif;
    max-width: 227px;
    text-align: center;
}
.product-block p {
    margin-top: 20px;
    font-size: 20px;
    color: #888;
}
@media only screen and (max-width: 600px) {
    .product-block img {
        width: 270px;
        height: 400px;
    }
    .product-container .pro {
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
}
</style>