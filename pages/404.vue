<template>
  <div class="message">
    <h2>404</h2>
    <h1>{{ $t('error.notFound') }}</h1>
    <p>{{ $t('error.sentence') }}</p>
    <nuxt-link class="home" :to="localePath('index')" tabindex="0">Home</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.message {
  background: white;
  max-width: 450px;
  margin: 16px auto 16px;
  padding-top: 15%;
  height: 48vh;
  position: relative;
  z-index: 100;
  & h2 {
    color: #f88a0c;
    font-weight: bold;
    font-size: 2.5rem;
  }
  & h1 {
    font-size: 3.1rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.6);
    margin: 2rem 0 3rem;
  }
  & p {
    line-height: 140%;
    margin: 16px 0 24px;
    font-size: 2.1rem;
    white-space: pre-wrap;
  }
}
.home {
  font-size: 2rem;
  color: #333;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 currentColor;
  transition: box-shadow 0.13s ease-in-out;
  cursor: pointer;
}
.home:hover,
.home:focus {
  outline: none;
  box-shadow: inset 0 0 0 currentcolor, 0 2px 0 currentcolor;
}
@media (max-width: 600px) {
  body,
  .message {
    border-top: 16px solid #ffa100;
    margin-top: 0;
  }
}
</style>

<script>
export default {
  mounted() {
    this.$scrollTo("#bagus-title", 500, { easing: "ease-out" });
  }
};
</script>
