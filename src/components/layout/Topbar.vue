<script setup></script>

<template>
  <section class="topbar_container">
    <header class="topbar_header">
      <div style="font-size: 40px">Victoria Corbalán Labora</div>
      <div style="font-size: 20px; font-family: var(--font-subheader)">3D ENVIROMENT ARTIST</div>
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
  font-family: var(--font-header);
  text-transform: uppercase;
  color: var(--color-heading);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #fff;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--font-subheader);
  font-size: 24px;
}

a {
  padding: 0.2rem 0.2rem 0 0.2rem;
}

a:hover {
  outline: -webkit-focus-ring-color auto 1px;
}

a.current {
  font-weight: 600;
}

li,
a {
  list-style: none;
  text-decoration: none;
}

a:visited {
  color: var(--color-heading);
}
</style>
