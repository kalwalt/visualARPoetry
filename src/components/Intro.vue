<template>
    <div>
        <h2 class="subtitle">{{ title }}</h2>
        <p class="block">{{ intro }}</p>
        <img class="image container block" title="Image to track, download and print it!" src="https://media.githubusercontent.com/media/kalwalt/visualARPoetry-backend/main/src/imgs/fishes.jpg">
        <p class="block">{{ text }} </p>
        <a class="button" href="/visual">Visual page</a>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
    intro: String,
    text: String
  }
})
export default class Intro extends Vue {
  title!: string;
  intro!: string;
  text!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
</style>