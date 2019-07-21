<template>
  <img :srcset="setSrcset" :sizes="sizes" :src="setSrc" :alt="alt" />
</template>

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

