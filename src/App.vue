<template>
  <div id="nav" class="navbar">
    <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img class="image " alt="Visual AR Poetry logo" src="./assets/Visual_AR_Poetry.png"> 
    </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
    <router-link class="navbar-item" to="/">Home</router-link>
    <router-link class="navbar-item" to="/about">About</router-link>
  </div>
  </div>
  <router-view/>
</template>

<style lang=”scss”>
</style>
