<template>
  <ARnftScene/>
</template>

<script>
import ARnftScene from '@/components/ARnftScene.vue'
export default {
    name: 'Visual',
    components: {
        ARnftScene
    }

}
</script>

<style scoped>
body {  
  margin: 0;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ui {
  position: fixed;

  margin: 0.5rem;

  background-color: rgba( 255,255,255,0.6 );
  border-radius: 6px;
}

.stats {
  top: 0;
  left: 0;
  z-index: 200;
  margin: 0.5rem;
  padding: 0.5rem 0.5rem 0;
}

.stats-item {
  margin: 0 0 0.5rem;

}

.stats-item-title {
  margin: 0 0 0.25rem;

  font-size: 0.75rem;
}

#stats div {
  position: relative !important;
}

.marker {
  right: 0;
  bottom: 0;
  z-index: 200;
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;

  font-size: 0.75rem;
  color: inherit;
  text-decoration: none;
}

#arvideo {
  display: none;
}
</style>