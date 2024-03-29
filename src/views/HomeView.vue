<script setup></script>

<template>
  <main class="video_container">
    <video controls muted autoplay loop class="home_video">
      <source src="/content/Jungle_Adventure/Reel.mp4" type="video/webm" />
    </video>

    <h1 class="home_video_title">Jungle Adventure</h1>
  </main>
</template>

<style>
.video_container {
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
}

.home_video_title {
  font-family: var(--font-subheader);
  text-transform: uppercase;
  font-size: 1.714rem;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}

.home_video {
  height: calc(100vh - var(--header-height) - var(--footer-height) - 9rem);
  max-width: 100vw;
}

@media (min-width: 1024px) {
  .video_container {
    padding-top: 5rem;
  }
}
</style>
