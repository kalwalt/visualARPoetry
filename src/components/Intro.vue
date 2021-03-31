<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
    text: String
  }
})
export default class Intro extends Vue {
  title!: string;
  text!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
</style>