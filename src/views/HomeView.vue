<script setup>
</script>
<template>
    <div class="container">
        <div class="second">
            <div class="home">
                <h1> Raining Offers For Hot Summer!</h1>
                <p>25% Off On All Products</p>
                <router-link to="/Accessories"><button class="button-1">Shop Now</button></router-link>
                <router-link to="/About"><button class="button-1" v-on:click="" style="margin-left: 10px;">Find
                        More</button></router-link>
            </div>
            <div class="image-container">
                <div class="image-wrapper" style="object-fit: cover; object-position: right;">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg"
                        alt="Image 1">
                </div>
                <div class="image-wrapper">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg"
                        alt="Image 2">
                </div>
                <div class="image-wrapper">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg"
                        alt="Image 3">
                </div>
            </div>
            <div class="thirdview">
                <div class="insidetext">
                    <h1>Limited Time Offer</h1>
                    <h4>Space Edition</h4>
                    <p>An online store is a digital platform that enables users to browse, select,
                        and
                        purchase products or services over the internet. It provides a convenient and accessible way for
                        consumers to shop from the comfort of their homes, offering a wide range of goods with secure online
                        transactions.</p>
                    <p style="font-size: 25px;">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
                    <router-link to="/Accessories"><button class="button-1">Shop Now</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.image-wrapper img {
    border-radius: 20%;
}
.block-container {
    display: flex;
    font-family: 'Roboto', sans-serif;
}
.second {
    padding-bottom: 50px;
}
.home h1 {
    padding-right: 45%;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin-left: 70px;
}
.home .button-1 {
    margin-left: 40px;
}
.home {
    background: transparent;
}
.insidetext p {
    font-size: 20px;
    color: white;
    margin-left: 20px;
    margin-right: 20px;
}
.home p {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    margin-top: 50px;
    margin-left: 130px;
    color: white;
}
.fourthview {
    margin-left: 110px;
    margin-top: 50px;
    color: white;
}

.insidetext {
    padding-bottom: 40px;
}
.insidetext h1 {
    font-size: 25px;
    padding-top: 60px;
    font-family: 'Roboto', sans-serif;
    margin-left: 70px;
    font-size: 40px;
    color: white;
}
.white-block {
    width: 250px;
    height: 250px;
    background-color: rgb(10, 10, 114);
    margin-right: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 28px;
}

h4 {
    font-size: 40px;
    padding-left: 10%;
    font-family: 'Roboto', sans-serif;
    color: white;
}
.home {
    padding: 50px;
}
.thirdview {
    background-image: url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
    margin-left: 210px;
    margin-top: 30px;
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
body {
    overflow-x: scroll;
    white-space: nowrap;
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
.image-container {
    padding-top: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 80px;
    background-color: rgb(10, 10, 114);
    margin-bottom: 60px;
}
.image-wrapper img {
    width: 310px;
    height: 463px;
}
.image-text {
    margin-top: 10px;
    font-size: 16px;
    transform: translateY(-500%);
    color: black;
    margin-left: 50px;
    font-family: 'Roboto', sans-serif;
}
.image-wrapper:hover {
    animation: forwards;
}
@media screen and (max-width: 1000px) {
    .image-wrapper img {
        width: 250px;
        height: 263px;
    }
}
@media screen and (max-width: 992px) {
    .image-container {
        padding-top: 60px;
        display: flex;
        padding: 20px;
        flex-direction: column;
        margin-top: 20px;
        padding-bottom: 80px;
        background-color: rgb(10, 10, 114);

    }
    .image-wrapper img {
        margin-top: 40px;
    }
    .home h1 {
        font-size: 30px;
    }
    .home p {
        font-size: 25px;
        padding-left: -20px;
    }
}

@media screen and (max-width: 500px) {
    .insidetext h1 {
        font-size: 30px;
    }
    .insidetext h4 {
        font-size: 25px;
        text-align: center;
    }
    .insidetext p {
        font-size: 13px;
        color: white;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }
    .button-1 {
        align-items: center;
        font-size: 12px;
        border-radius: 4.25rem;
    }
    .container {
        position: relative;
    }
    .home h1 {
        padding-right: 1%;
        margin-left: 1px;
        font-size: 22px;
    }
    .home p {
        font-size: 18px;
        margin-top: 26px;
        margin-left: 13px;
    }
    .home .button-1 {
        margin-left: 3px;
    }
}</style>