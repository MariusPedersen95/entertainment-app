<template>
  <div>
    <Nav />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
}

main {
  padding: 0 0 0 6rem;
}
</style>
