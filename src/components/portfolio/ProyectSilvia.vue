<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

const silviaImages1 = [
  '/content/Silvia/Galeria_1/1.png',
  '/content/Silvia/Galeria_1/2.png',
  '/content/Silvia/Galeria_1/3.png'
];

const silviaImages2 = [
  '/content/Silvia/Galeria_2/4.png',
  '/content/Silvia/Galeria_2/5.png',
  '/content/Silvia/Galeria_2/6.png',
  '/content/Silvia/Galeria_2/7.png',
  '/content/Silvia/Galeria_2/8.png'
];
</script>

<template>
  <section class="proyect_container">
    <Carousel :itemsToShow="2" :wrapAround="true" :autoplay="5000" :transition="500" class="carousel__container">
      <Slide v-for="imgSrc in silviaImages1" :key="imgSrc">
        <div class="carousel__item">
          <img :src="imgSrc" alt="Silvia" style="max-height: 75vh" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <ImgComparisonSlider>
      <img slot="first" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/1.png" />
      <img slot="second" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/7.png" />
    </ImgComparisonSlider>

    <ImgComparisonSlider>
      <img slot="first" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/4.png" />
      <img slot="second" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/5_V02.png" />
    </ImgComparisonSlider>

    <ImgComparisonSlider>
      <img slot="first" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/3.png" />
      <img slot="second" style="width: 100%; max-height: 65vh" src="/content/Silvia/Sliders/8.png" />
    </ImgComparisonSlider>

    <Carousel :itemsToShow="2" :wrapAround="true" :autoplay="5000" :transition="500" class="carousel__container">
      <Slide v-for="imgSrc in silviaImages2" :key="imgSrc">
        <div class="carousel__item">
          <img :src="imgSrc" alt="Silvia" style="max-height: 75vh" />
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
.proyect_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.carousel__container {
  margin: auto;
  width: 80%;
}
</style>
