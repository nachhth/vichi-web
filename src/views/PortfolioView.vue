<script setup>
import ProyectJungle from '@/components/portfolio/ProyectJungle.vue';
import ProyectSilvia from '@/components/portfolio/ProyectSilvia.vue';
</script>

<template>
  <main class="portfolio_container">
    <article class="portfolio">
      <header class="portfolio_header">
        <h1>JUNGLE ADVENTURE</h1>
        <span class="portfolio_subtitle">PORTFOLIO</span>
        <div>01</div>
      </header>

      <ProyectJungle />
    </article>

    <article class="portfolio">
      <header class="portfolio_header">
        <h1>SILVIA</h1>
        <span class="portfolio_subtitle">PORTFOLIO</span>
        <div>02</div>
      </header>

      <ProyectSilvia />
    </article>

    <!-- <article class="portfolio">
      <header class="portfolio_header">
        <h1>ENCHANTED VILLAGE</h1>
        <span class="portfolio_subtitle">PORTFOLIO</span>
        <div>03</div>
      </header>
    </article> -->

    <!-- <article class="portfolio">
      <header class="portfolio_header">
        <h1>EL VIAJE DE SAID</h1>
        <span class="portfolio_subtitle">PORTFOLIO</span>
        <div>04</div>
      </header>
    </article> -->

    <!-- <article class="portfolio">
      <header class="portfolio_header">
        <h1>TRENDY SET GO!</h1>
        <span class="portfolio_subtitle">PORTFOLIO</span>
        <div>05</div>
      </header>
    </article> -->
  </main>
</template>

<style scoped>
.portfolio {
  min-height: calc(100vh - var(--footer-height));
}

.portfolio_header {
  position: relative;
  font-family: var(--font-header);
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}

h1 {
  all: unset;
}

.portfolio_subtitle {
  position: absolute;
  font-size: 1rem;
  font-family: var(--font-subheader);
  top: 5.25rem;
  left: 2.1rem;
}

@media (min-width: 1024px) {
  .portfolio_header {
    font-size: 6.857rem;
  }

  .portfolio_subtitle {
    font-size: 1.429rem;
    top: 8rem;
  }
}
</style>
