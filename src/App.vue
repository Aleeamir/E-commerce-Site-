<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useStore } from "vuex";

const store = useStore()
console.log("store ==> ", store)
</script>

<template>

  
 <Header />
<RouterView />
 <Footer />
</template>

