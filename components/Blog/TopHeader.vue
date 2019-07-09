<template>
  <nav class="blog-header">
    <svg id="top-nav">
      <defs>
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#909473" />
          <stop offset="85%" stop-color="#909473" />
          <stop offset="100%" stop-color="#909473" stop-opacity="0" />
        </linearGradient>
        <mask id="mask">
          <rect class="mask__whole" />
          <rect
            class="mask__window window"
            x="15%"
            y="29.3%"
            :class="{ deActive: selectedTag === 'life'}"
          />
          <rect
            class="mask__window window"
            x="35%"
            y="29.3%"
            :class="{ deActive: selectedTag === 'web'}"
          />
          <rect
            class="mask__window window"
            x="55%"
            y="29.3%"
            :class="{ deActive: selectedTag === 'japanese'}"
          />
          <rect
            class="mask__window window"
            x="75%"
            y="29.3%"
            :class="{ deActive: selectedTag === 'glutenFree'}"
          />
        </mask>
      </defs>
      <rect class="top-nav" id="rect1" x="0" y="0" width="100%" height="100%" fill="#909473" />
      <rect class="window yellow" x="15%" y="29.3%" v-if="selectedTag === 'life'" />
      <rect class="window yellow" x="35%" y="29.3%" v-if="selectedTag === 'web'" />
      <rect class="window yellow" x="55%" y="29.3%" v-if="selectedTag === 'japanese'" />
      <rect class="window yellow" x="75%" y="29.3%" v-if="selectedTag === 'glutenFree'" />
    </svg>

    <div class="upper-nav">
      <TextLogo :selectTag="selectTag" />

      <BlogNavLinks />
    </div>
    <ul class="filters">
      <FilterWindow
        v-for="filter of filterList"
        :key="filter.tag"
        :tag="filter.tag"
        :text="filter.text"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.blog-header {
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 20;

  .upper-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 11;
  }

  .filters {
    width: 100%;
    align-self: center;
    margin-top: -2vw;
    padding: 1.9vh 12% 0;
    display: flex;
    // grid-template-columns: repeat(4, minmax(18%, 23rem));
    // justify-content: center;
    align-items: flex-start;
    // gap: 1.2%;
    list-style: none;
    z-index: 10;

    & > li:not(:last-child) {
      margin-right: 4.5%;
    }
  }
}
//SVG Styling
#top-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .window {
    width: 9%;
    height: calc(7% + 5vw);
  }
  .top-nav {
    width: 100%;
    height: 100%;
    fill: url(#Gradient1);
    mask: url(#mask);
  }

  #mask {
    width: 100%;
    height: 100%;

    & .mask {
      &__whole {
        width: 100%;
        height: 100%;
        fill: #fff;
      }
      &__window {
        fill: #000;
      }
    }
  }
}
.yellow {
  fill: $yellow-bg;
}
.de-active {
  fill: #fff;
}
</style>


<script>
import { mapState, mapMutations } from "vuex";
import TextLogo from "~/components/Blog/TextLogo";
import BlogNavLinks from "~/components/Blog/BlogNavLinks";
import FilterWindow from "~/components/Blog/FilterWindow";
export default {
  data() {
    return {
      filterList: [
        { tag: "life", text: "posts.life" },
        { tag: "web", text: "posts.web" },
        { tag: "japanese", text: "posts.japanese" },
        { tag: "glutenFree", text: "posts.glutenFree" }
      ]
    };
  },
  components: {
    TextLogo,
    BlogNavLinks,
    FilterWindow
  },
  computed: {
    ...mapState("posts", ["selectedTag"])
  },
  methods: {
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>

