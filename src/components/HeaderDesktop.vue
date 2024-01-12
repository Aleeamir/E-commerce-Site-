<template>
    <nav>
        <div class="nav-inner">
            <div class="logo">
                <router-link to="/" class="logo-link">
                    <img src="@/assets/Images/logo.png" alt="Website Logo" />
                </router-link>
            </div>
            <div class="inner-nav">
                <RouterLink to="/"
                    style="text-decoration: none; color: white; font-size: 20px;font-family: 'Roboto', sans-serif;">Home
                </RouterLink>
                <RouterLink to="/Accessories"
                    style="text-decoration: none;font-size: 20px; color: white; font-family: 'Roboto', sans-serif;">
                    Accessories</RouterLink>
                <RouterLink to="/Women"
                    style="text-decoration: none; color: white; font-size: 20px;font-family: 'Roboto', sans-serif;">
                    Women
                </RouterLink>
                <RouterLink to="/Men"
                    style="text-decoration: none;font-size: 20px; color: white; font-family: 'Roboto', sans-serif;">Men
                </RouterLink>
            </div>
            <div class="sidenav">
                <RouterLink to="/About" style="text-decoration: none; color: white;">About</RouterLink>
                <RouterLink to="/Contact" style="text-decoration: none; color: white;">Contact</RouterLink>
                <RouterLink to="/Amount" style="text-decoration: none; color: white;">$0.00</RouterLink>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.sidenav {
    font-family: 'Roboto', sans-serif;
}
.nav-inner {
    background-color: rgb(10, 10, 114);
}
nav .nav-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
}
.logo {
    padding: 20px;
}
.nav .nav-inner {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
* {
    padding: 0;
    box-sizing: border-box;
}
.inner-nav a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    padding: 0 15px;
}
.sidenav a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    padding-right: 35px;
}
.nav-inner {
    background-color: rgb(10, 10, 114);
}
</style>  