<script setup>
  import { ImgComparisonSlider } from '@img-comparison-slider/vue';
</script>

<template>
  <section class="proyect_container">
    <ImgComparisonSlider>
      <!-- eslint-disable -->
      <img slot="first" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
      <img slot="second" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
      <!-- eslint-enable -->
    </ImgComparisonSlider>

    <ImgComparisonSlider>
      <!-- eslint-disable -->
      <img slot="first" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
      <img slot="second" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
      <!-- eslint-enable -->
    </ImgComparisonSlider>

    <ImgComparisonSlider>
      <!-- eslint-disable -->
      <img slot="first" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
      <img slot="second" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </section>
</template>

<style scoped>
  .proyect_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
