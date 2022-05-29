<template>
  <nav>
    <a class="flex items-center justify-center mt-2" href="#">
      <img src="/assets/logo.svg" />
    </a>
    <div class="flex flex-col items-center mt-2">
      <a class="flex items-center justify-center mt-1" href="#">
        <img src="/assets/nav/icon-nav-home.svg" />
      </a>
      <a class="flex items-center justify-center mt-1" href="#">
        <img src="/assets/nav/icon-nav-movies.svg" />
      </a>
      <a class="flex items-center justify-center mt-1" href="#">
        <img src="/assets/nav/icon-nav-tv-series.svg" />
      </a>
      <a class="flex items-center justify-center mt-1" href="#">
        <img src="/assets/nav/icon-nav-bookmark.svg" />
      </a>
    </div>
    <!-- Her kommer icon bilde av de som er logget inn -->
    <a class="flex items-center justify-center mt-auto" href="#">
      <img src="/assets/image-avatar.png" width="40" />
    </a>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 4rem;
  height: 96%;
  border-radius: 20px;
  background: #161d2f;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 0 0 2rem 0;
}
</style>
