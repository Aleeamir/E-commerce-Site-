<template>
    <nav>
        <div class="nav-inner">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/Images/logo.png" alt="Website Logo" />
                </router-link>
            </div>
            <b-navbar-nav style="cursor: pointer;">
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




            </b-navbar-nav>



            <div class="sidebar">

                <RouterLink to="/About" style="text-decoration: none; color: white;">About</RouterLink>
                <RouterLink to="/Contact" style="text-decoration: none; color: white;">Contact</RouterLink>
                <RouterLink to="/Amount" style="text-decoration: none; color: white;">$0.00</RouterLink>

            </div>
        </div>
    </nav>
</template>

<style scoped>
.sidebar {
    font-family: 'Roboto', sans-serif;
}

.nav-inner {
    background-color: rgb(10, 10, 114);
}

nav .nav-inner {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
}

.nav .nav-inner .b-navbar-nav {

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
    margin: 13px;
    padding: 0;
    box-sizing: border-box;
    /* margin-top: 40px; */
}

@media only screen and (min-width: 576px) and (max-width: 767.98px) {
    .inner-nav {
        display: none;
    }

    .sidebar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
    }

}
</style>