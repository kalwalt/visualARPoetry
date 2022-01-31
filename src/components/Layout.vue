<template>
    <div class="container">
    <div class="columns is-centered is-vcentered is-mobile">
      <img class="column is-narrow has-text-centered block" alt="Vue logo" src="../assets/Visual_AR_Poetry.png">
    </div>
  </div>
  <div class="section has-text-centered">
    <Header msg="Welcome to the Visual AR Poetry App"/>
    <Intro
    title="A generative app for visual poetry"
    intro="Visualize every day a different visual poetry, made with text of poems, geometries and glitch noises."
    text="Download the picture and print it! You will track with your camera Phone to display a generated image!"
    />
    <Masonry/>
  </div>
  <div class="section has-text-centered">Made by <a href="https://github.com/kalwalt">@kalwalt</a></div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Masonry from '@/components/Masonry.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    Masonry
  }
}
</script>
