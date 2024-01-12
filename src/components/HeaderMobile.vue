<template>
    <nav>
        <div class="nav-inner">
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
@media only screen and (max-width: 966px) {
    nav .nav-inner {
        display: flex;
        flex-direction: column;
    }

    .nav .nav-inner .b-navbar-nav {
        margin-top: 20px;
    }

    .nav-inner {
        background-color: rgb(10, 10, 114);
    }

    .sidenav {
        text-align: center;
    }

    .sidenav a {
        padding-left: 20px;
    }

    .hamburger-icon {
        display: block;
    }

    .hamburger-icon i {
        color: white;
        font-size: 30px;
        padding: 20px;
    }

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
        padding: 20px;
        align-self: flex-start;
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
        align-self: flex-end;
    }

    .nav .inner-nav {
        height: 0px;
    }

}

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
    }  */</style>
  