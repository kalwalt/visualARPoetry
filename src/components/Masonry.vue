<template>
  <div class="section">
    <div
      class="columns"
      data-masonry='{"percentPosition": true }'
    >
      <div class="column" v-for="(card, index) in collection" :key="index">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="card.urlToImage"
                alt="image link lost"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseImage' + index"
              />
            </figure>
          </div>

          <h5>
            <a :href="card.url" target="_blank">{{ card.title }}</a>
          </h5>
          <div class="collapse" :id="'collapseImage' + index">
            <div class="card-content">
              <span v-html="card.description"></span>
            </div>
          </div>
          <div class="card-footer">
            {{ card.publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";

export default {
  name: Masonry,
  data() {
    return {
      collection: [
        {
          urlToImage:
            "https://raw.githubusercontent.com/kalwalt/visualARPoetry-backend/main/src/imgs/fishes.jpg",
          title: "title1",
          description: "short description",
        },
        {
             urlToImage:
            "https://raw.githubusercontent.com/kalwalt/visualARPoetry-backend/main/src/imgs/fishes.jpg",
          title: "title2",
          description:
            "Lorem ipsum dolor sit amet...",
        },
        {
          title: "title3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
        {
          urlToImage:
            "https://raw.githubusercontent.com/kalwalt/visualARPoetry-backend/main/src/imgs/fishes.jpg",
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
        {
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
        {
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
        {
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
        {
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sed urna ultricies aliquam. Nulla a massa neque. Nunc commodo eros ex, at faucibus lacus molestie non.",
        },
      ],
    };
  },
  mounted() {
    // initialize masonry
    var row = document.querySelector("[data-masonry]");
    new Masonry(row, {
      // options
      percentPosition: true,
    });
  },
};
</script>