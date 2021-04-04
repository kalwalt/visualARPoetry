<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Visual_AR_Poetry.png">
    <Header msg="Welcome to Visual AR Poetry App"/>
    <Intro title="A generative app for visual poetry" text="Visualize every day a different visual poetry"/>
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
