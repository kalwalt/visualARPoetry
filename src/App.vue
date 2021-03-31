<template>
  <img alt="Vue logo" src="./assets/Visual_AR_Poetry.png">
  <Header msg="Visual AR Poetry"/>
  <Intro title="A generative app for visual poetry" text="Visualize every day a different visual poetry"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';

@Options({
  components: {
    Header,
    Intro,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
