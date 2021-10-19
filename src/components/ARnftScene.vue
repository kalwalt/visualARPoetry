<template>
  <div id="loading">
    <img src="arNFT-logo.gif" alt="arNFT.js logo" />
    <span class="loading-text">Loading, please wait...</span>
  </div>
  <div id="app">
    <canvas id="canvas" width="640" height="480"></canvas>
    <video id="video" muted playsinline autoplay></video>
  </div>
</template>

<script>
import { ARnft } from "@webarkit/ar-nft";
import ARnftThreejs from "@webarkit/arnft-threejs";
import { vueWindowSizeMixin } from 'vue-window-size/option-api';

// Components

export default {
  name: "ARnftScene",
  components: {},
  mixins: [vueWindowSizeMixin()],
  data() {
    return {
      camera: null,
      scene: null,
      scene2: null,
      renderer: null,
      renderer2: null,
      controls: null,
    };
  },
  methods: {
    init() {

      ARnft.init(
        640,
        480,
        ["../DataNFT/fishes"],
        ["fishes"],
        "../config.json",
        false
      )
        .then((nft) => {
          let canvas = document.getElementById("canvas");
          let fov = (0.8 * 180) / Math.PI;
          let ratio = this.$windowWidth / this.$windowHeight;
          let config = {
            renderer: {
              alpha: true,
              antialias: true,
              context: null,
              precision: "mediump",
              premultipliedAlpha: true,
              stencil: true,
              depth: true,
              logarithmicDepthBuffer: true,
            },
            camera: {
              fov: fov,
              ratio: ratio,
              near: 0.01,
              far: 1000,
            },
          };
          let sceneThreejs = new ARnftThreejs.SceneRendererTJS(
            config,
            canvas,
            nft.uuid,
            true
          );
          sceneThreejs.initRenderer();

          let nftAddTJS = new ARnftThreejs.NFTaddTJS(nft.uuid);
          let imgConfig = { w: 1, h: 1, ws: 1, hs: 1 };
          nftAddTJS.addImage(
            "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/kalwalt/visualARPoetry-backend/main/src/imgs/visual_poetry.jpg",
            "fishes",
            0xbbbbff,
            180,
            imgConfig,
            false
          );
          const tick = () => {
            sceneThreejs.draw();
            window.requestAnimationFrame(tick);
          };
          tick();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.init();
  },
};
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

#loading span {
  color: black;
  font-weight: bold;
}
</style>
