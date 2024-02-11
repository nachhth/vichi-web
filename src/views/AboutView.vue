<template>
  <div class="about">
    <h1>About Me</h1>

    <main>
      <div class="img_container"></div>
      <div>
        <p class="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quas perferendis sequi magni eveniet commodi ipsa
          molestiae consectetur minima, repellendus velit maiores! Perspiciatis est maxime, id quibusdam voluptates quidem ea
          Minima, soluta inventore ad magnam perferendis, Ipsa nisi quis harum
        </p>

        <div class="links">
          <a href="mailto:victoria.corbalan.labora@udc.es"> victoria.corbalan.labora@udc.es </a>
        </div>

        <div class="links view_resume">
          <a href="/cv_victoria_corbalan_labora.pdf" target="_blank"> VIEW RESUME </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.about {
  font-family: var(--font-header);
  padding: 1rem 2rem;
}

h1 {
  all: unset;
  font-size: 96px;
  text-transform: uppercase;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
}

.img_container {
  background-image: url('../assets/vichita.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 27rem;
  width: 27rem;
  border-radius: 50%;
  border: 3px solid var(--color-text);
}

.description {
  width: 25rem;
  font-family: var(--font-subheader);
  font-size: 24px;
}

.links {
  margin-top: 1rem;
}
.links > a {
  text-transform: uppercase;
}

.links.view_resume {
  font-size: 48px;
  font-family: var(--font-header);
}
.links.view_resume > a {
  padding-top: 0;
}
</style>
