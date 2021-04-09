<template>
    <div id="loading">
      <img src="arNFT-logo.gif" alt="arNFT.js logo">
      <span class="loading-text">Loading, please wait...</span>
    </div>
    <div id="app">
      <canvas id="canvas" width="640" height="480"></canvas>
      <video id="video" muted playsinline autoplay></video>
    </div>
</template>

<script>
import { ARnft } from '@kalwalt/ar-nft'

// Components

export default {
    name: 'ARnftScene',
    components: {},
    data() {
        return {
            camera: null,
            scene: null,
            scene2: null,
            renderer: null,
            renderer2: null,
            controls: null
        }
    },
    methods: {
        init() {

            ARnft.init(640, 480, "../DataNFT/fishes", '../config.json', false)
            .then((nft) => {
                nft.addImage('https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/kalwalt/visualARPoetry-backend/main/src/imgs/visual_poetry.jpg', 0xbbbbff, 180);
            }).catch((error) => {
            console.log(error);
            });

        }
    },
    mounted() {
        this.init();
    }
}
</script>

<style scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

#video {
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

#canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;

  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

#loading {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 9999999;
}

#loading img {
    height: 5em;
}

#loading span{
  color: black;
  font-weight: bold;
}
</style>
