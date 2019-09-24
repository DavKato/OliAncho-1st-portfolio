<template>
  <div class="admin-layout">
    <nuxt></nuxt>
  </div>
</template>

<style lang="scss" scoped>
#admin-layout {
  width: 100vw;
}
</style>

<script>
export default {
  nuxti18n: false,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.quilljs.com/1.0.0/quill.snow.css"
        }
      ],
      meta: [
        {
          name: "viewport",
          hid: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    };
  }
};
</script>
