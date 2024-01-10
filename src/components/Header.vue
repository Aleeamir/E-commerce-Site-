<template>
    <nav>
        <div class="nav-inner">

            <div class="logo">
                <router-link to="/" class="logo-link">
                    <img src="@/assets/Images/logo.png" alt="Website Logo" />
                </router-link>
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

            <div class="sidebar">

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
        }
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
.nav-bar-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.sidebar {
    font-family: 'Roboto', sans-serif;

}

.hamburger-icon {
    display: none;
}

.nav-inner {
    background-color: rgb(10, 10, 114);
}
nav .nav-inner {
    display: flex;
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
.sidebar a {
    text-decoration: none;
  color: white;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  padding-right: 35px;
  
}

@media only screen and (max-width: 966px) {
    nav .nav-inner {
        display: flex;
        flex-direction: column;
    }

    .nav .nav-inner .b-navbar-nav {
        margin-top: 20px;
    }

    
    .sidebar {
        padding-top: 20px;
    }

    @media only screen and (max-width: 441px) {
        /* nav .nav-inner {
            height: 220px;
        } */

        nav .nav-inner {
            display: flex;
            flex-direction: column;
            /* height: 195px; */
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
            /* Set the desired width */
            height: auto;
        }

        .inner-nav {
            display: flex;
            flex-direction: column;
            background-color: rgb(10, 10, 114);
            background-size: cover;
            /* align-items: center; */
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
    }
}
</style>