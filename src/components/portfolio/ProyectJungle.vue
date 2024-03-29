<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const jungleImages = [
  '/content/Jungle_Adventure/1.PNG',
  '/content/Jungle_Adventure/2.PNG',
  '/content/Jungle_Adventure/3.PNG',
  '/content/Jungle_Adventure/4.PNG',
  '/content/Jungle_Adventure/5.PNG',
  '/content/Jungle_Adventure/6.PNG',
  '/content/Jungle_Adventure/7.PNG'
];
</script>

<template>
  <section class="proyect_container">
    <Carousel :itemsToShow="2" :wrapAround="true" :autoplay="5000" :transition="500" class="carousel__container">
      <Slide v-for="imgSrc in jungleImages" :key="imgSrc">
        <div class="carousel__item">
          <img :src="imgSrc" alt="Jungle Adventure" style="max-height: 75vh" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <div class="jungle_subtitle">MODELING, ENVIROMENT, SET DRESSING, LIGHTING, FX</div>
  </section>
</template>

<style scoped>
/* .proyect_container {
 
  } */

.carousel__container {
  margin: auto;
  width: 80%;
}

.jungle_subtitle {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
