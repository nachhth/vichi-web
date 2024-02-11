<script setup></script>

<template>
  <footer
    class="footer_container"
    :style="$route.path !== '/about-me' ? ' justify-content: space-between;' : 'justify-content: flex-end;'">
    <a v-if="$route.path !== '/about-me'" href="mailto:victoria.corbalan.labora@udc.es"> victoria.corbalan.labora@udc.es </a>

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
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: var(--footer-height);
  font-size: 1.429rem;
  background-color: var(--color-background);
}
</style>
