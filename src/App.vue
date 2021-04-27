<template>
  <div id="nav" class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img class="image " alt="Visual AR Poetry logo" src="./assets/Visual_AR_Poetry.png"> 
      </a>
      <a @click="showNav = !showNav" :class="{ 'is-active': showNav }" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start has-text-centered">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
  </div>
  </div>
  <router-view/>
</template>

<script>
    export default {
          data: function() {
        return {
            showNav: false
        }
      }
    }
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
