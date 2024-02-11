<script setup></script>

<template>
  <footer class="footer_container">
    <a href="mailto:victoria.corbalan.labora@udc.es"> victoria.corbalan.labora@udc.es </a>

    <div>{{ new Date().getFullYear() }}</div>
  </footer>
</template>

<style scoped>
.footer_container {
  font-family: var(--font-subheader);
  text-transform: uppercase;
  color: var(--color-text);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 20px;
}
</style>
