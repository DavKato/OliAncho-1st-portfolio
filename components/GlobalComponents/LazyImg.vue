<template>
  <v-lazy-image
    :srcset="setSrcset"
    :sizes="sizes"
    :src="setSrc"
    :src-placeholder="this.placeholder ? `${baseUrl}${srcPlaceholder}/${src}` : ''"
    :alt="alt"
  ></v-lazy-image>
</template>

<style scoped>
.v-lazy-image {
  filter: blur(3px);
  opacity: 0.5;
  transition: filter 0.2s, opacity 0.2s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
  opacity: 1;
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    options: {
      type: String,
      required: false,
      default: "f_auto,q_auto"
    },
    width: {
      type: String,
      required: false,
      default: ""
    },
    sizes: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: Boolean,
      required: false,
      default: false
    },
    srcPlaceholder: {
      type: String,
      required: false,
      default: "f_auto,q_10,w_60"
    },
    alt: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      baseUrl: "https://res.cloudinary.com/oliancho/image/upload/"
    };
  },
  computed: {
    setSrc() {
      let width = this.width;
      width = !width || width.includes(",") ? "" : `,w_${width}`;
      return `${this.baseUrl}${this.options}${width}/${this.src}`;
    },
    setSrcset() {
      const widths = this.width;
      return widths.includes(",")
        ? widths
            .split(",")
            .map(width => {
              width = width.trim();
              return `${this.baseUrl}${this.options},w_${width}/${this.src} ${width}w`;
            })
            .join(", ")
        : "";
    }
  }
};
</script>
