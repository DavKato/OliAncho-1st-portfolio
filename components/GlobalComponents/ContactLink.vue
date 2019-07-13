<template>
  <div class="main-nav__mail" @click="scrollToContact">
    <img src="~/assets/img/2x/top/top-email.png" alt="jump to contact form" style="cursor:pointer;" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      TweenLite.to(window, 0.5, { scrollTo: { y: "#contact", offsetY: 30 } });
    }
  }
};
</script>