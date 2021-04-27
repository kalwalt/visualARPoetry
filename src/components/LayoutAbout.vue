<template>
    <div class="container">
    <div class="columns is-centered is-vcentered is-mobile">
      <img class="column is-narrow has-text-centered block" alt="Vue logo" src="../assets/Visual_AR_Poetry.png">
    </div>
  </div>
  <div class="section has-text-centered">
    <Header msg="About Visual AR Poetry"/>
      <p class="section">What is this? This little project aim to generate every day programmatically from a server a different image.
      An experiment of <b>Generative Art</b> and <b>Augmented Reality</b>, that will evolve over the time. Updated news will be posted on the <a href="https://www.kalwaltart.com/blog/">Kalwalt blog</a></p>
  </div>
  <div class="section has-text-centered">Made by <a href="https://github.com/kalwalt">@kalwalt</a></div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
    //Intro
  }
}
</script>
