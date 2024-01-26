<template>
    <nav>
        <div class="nav-inner-mobile">
            <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
                <div class="logo">
                    <router-link to="/" class="logo-link">
                        <img src="@/assets/Images/logo.png" alt="Website Logo" />
                    </router-link>
                </div>
                <div class="hamburger-icon" @click="toggleMobileMenu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div class="inner-nav" v-if="isOpen">
                <RouterLink to="/">Home
                </RouterLink>
                <RouterLink to="/Accessories">
                    Accessories</RouterLink>
                <RouterLink to="/Women">
                    Women
                </RouterLink>
                <RouterLink to="/Men">Men
                </RouterLink>
            </div>
            <div class="sidenav">
                <RouterLink to="/About">About</RouterLink>
                <RouterLink to="/Contact">Contact</RouterLink>
                <RouterLink to="/Amount">$0.00</RouterLink>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleMobileMenu(e) {
            console.log(e)
            this.isOpen = !this.isOpen
        }
    }
}
</script>
<style scoped>
/* @media only screen and (max-width: 441px) {
        

        nav .nav-inner {
            display: flex;
            flex-direction: column;
        }

        .nav .nav-inner .b-navbar-nav {
            margin-top: 20px;
        }

        .inner-nav {
            margin-top: -6px;
        }

        .hamburger-icon {
            display: block;
        }

        .logo {
            display: flex;
            flex-direction: row;
        }

        .logo .logo-link {
            width: 300px;
            height: auto;
        }

        .inner-nav {
            display: flex;
            flex-direction: column;
            background-color: rgb(10, 10, 114);
            background-size: cover;
            justify-content: center;
            width: 100%;
        }

        .hamburger-icon i {
            color: white;
            font-size: 30px;
        }

        .nav .inner-nav {
            height: 0px;
        }
    }  */
</style>
  