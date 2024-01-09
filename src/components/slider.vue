<template>
    <div class="slider">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="slide">
          {{ slides[currentIndex].content }}
        </div>
      </transition>
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
  }
  
  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #ddd; /* Set a background color for the slides */
    color: #333; /* Set text color */
    font-size: 24px;
    transition: transform 0.5s ease-in-out;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>