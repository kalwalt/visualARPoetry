<template>
    <div class="container">
    <div class="columns is-centered is-vcentered is-mobile">
      <img class="column is-narrow has-text-centered block" alt="Vue logo" src="../assets/Visual_AR_Poetry.png">  
    </div>
  </div>
  <div class="has-text-centered">
    <Header class="title" msg="Welcome to the Visual AR Poetry App"/>
    <Intro
    class="subtitle" 
    title="A generative app for visual poetry" 
    intro="Visualize every day a different visual poetry"
    text="Download the picture and print it! You will track with your camera Phone to display a generated image!"
    />
  </div> 
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Intro
  }
}
</script>