<template>
  <div id="app">
    <Navbar />
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./router/Navbar")
  }
};
</script>

<style lang="stylus">
body {
  background: #333;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
