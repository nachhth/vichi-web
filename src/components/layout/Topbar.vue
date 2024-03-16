<script setup></script>

<template>
  <section class="topbar_container">
    <header class="topbar_header">
      <div style="font-size: 2.857rem">Victoria Corbalán Labora</div>
      <div style="font-size: 1.429rem; font-family: var(--font-subheader)">3D ENVIROMENT ARTIST</div>
    </header>

    <nav>
      <ul class="links">
        <li>
          <router-link to="/" :class="$route.path == '/' ? 'current' : ''"> Home </router-link>
        </li>
        <li>
          <router-link to="/portfolio" :class="$route.path == '/portfolio' ? 'current' : ''"> Portfolio </router-link>
        </li>
        <li>
          <router-link to="/about-me" :class="$route.path == '/about-me' ? 'current' : ''"> About Me </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
  .topbar_container {
    z-index: var(--z-index-2);
    font-family: var(--font-header);
    text-transform: uppercase;
    color: var(--color-heading);
    padding: 1rem 2rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #fff;
    background-color: var(--color-background);
    position: sticky;
    top: 0;
  }

  ul {
    padding-left: 0%;
  }
</style>
