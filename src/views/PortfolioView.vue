<template>
  <main class="portfolio_container">
    <div class="portfolio">
      <h1>Portfolio</h1>
      <div>01</div>
    </div>
    <div class="portfolio">
      <h1>Portfolio</h1>
      <div>02</div>
    </div>
    <div class="portfolio">
      <h1>Portfolio</h1>
      <div>03</div>
    </div>
  </main>
</template>

<style scoped>
.portfolio {
  font-family: var(--font-header);
  text-transform: uppercase;
  font-size: 6.857rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - var(--footer-height));
}

h1 {
  all: unset;
}
</style>
