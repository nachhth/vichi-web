<script setup>
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';

  const jungleImages = ['/content/Jungle_Adventure/1.PNG', '/content/Jungle_Adventure/2.PNG', '/content/Jungle_Adventure/3.PNG', '/content/Jungle_Adventure/4.PNG', '/content/Jungle_Adventure/5.PNG', '/content/Jungle_Adventure/6.PNG', '/content/Jungle_Adventure/7.PNG'];
</script>

<template>
  <section class="proyect_container">
    <!--  :wrap-around="true" -->
    <Carousel :itemsToShow="2" :wrapAround="true" :autoplay="5000" :transition="500" class="carousel__container">
      <Slide v-for="imgSrc in jungleImages" :key="imgSrc">
        <div class="carousel__item">
          <img :src="imgSrc" alt="Jungle Adventure" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>


  </section>
</template>

<style scoped>
  /* .proyect_container {
 
  } */

  .carousel__container {
    margin: auto;
  }

  .carousel__item {
    border-radius: var(--border-radius);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }

  .carousel__slide {
    padding: 5px;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
</style>
