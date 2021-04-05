<template>
    <div id="renderElement">
        <div id="css"></div>
        <div id="webgl" class="webgl"></div>
    </div>
</template>

<script>
import * as THREE from 'three'
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

            ARnft.init(640, 480, "../DataNFT/pinball", 'config.json', true)
            .then((nft) => {
                let mat = new THREE.MeshLambertMaterial({color: 0xff0000});
                let boxGeom = new THREE.BoxGeometry(1,1,1);
                let cube = new THREE.Mesh( boxGeom, mat);
                cube.position.z = 90;
                cube.scale.set(180,180,180);

                nft.add(cube);
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
