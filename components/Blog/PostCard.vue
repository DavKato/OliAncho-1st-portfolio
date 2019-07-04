<template>
  <div class="postcard">
    <div class="date-box">{{ date | date }}</div>
    <h1 class="title">{{ title }}</h1>
    <p class="summary">{{ summary }}</p>
    <img class="thumbnail" :src="`~/static/${thumbnail}`" />
  </div>
</template>

<style lang="scss" scoped>
.postcard {
  padding: 0.5rem;
  background-color: #fff;
  position: relative;
  width: 70.5%;
  height: 18rem;

  .date-box {
    background-color: #000;
    color: #fff;
    font-family: $font-h;
    font-size: 3rem;
    margin-left: -3rem;
    text-align: center;
  }
  .title {
    color: #000;
    font-size: 3rem;
  }
  .summary {
    color: #000;
    font-size: 1.8rem;
    margin-top: 2rem;
  }
  .thumbnail {
    position: absolute;
    top: -3rem;
    right: 2rem;
    width: 29.6%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>


<script>
export default {
  props: {
    date: String,
    title: String,
    summary: String,
    thumbnail: String
  }
};
</script>
