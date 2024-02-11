<script setup>
import Topbar from './components/layout/Topbar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <main class="main_container">
    <Topbar />

    <RouterView />

    <Footer />
  </main>
</template>

<style scoped></style>
