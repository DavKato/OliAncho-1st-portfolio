<template>
  <section class="profile">
    <div class="contents">
      <div class="top">
        <div class="caption">
          <h3 class="title">
            {{ $t('about.gobuPosition') }}
            <span class="name">Gobu</span>
          </h3>
          <p class="skills">{{ $t('about.gobuSkill') }}</p>
        </div>
        <div class="img-box">
          <picture class="img-box-img">
            <source
              :media="`(max-width: ${$data.$tab}px)`"
              :srcset="`https://res.cloudinary.com/oliancho/image/upload/${options}331/bagushaus/Mobile/gobu.png 331w, https://res.cloudinary.com/oliancho/image/upload/${options}662/bagushaus/Mobile/gobu.png 662w, https://res.cloudinary.com/oliancho/image/upload/${options}993/bagushaus/Mobile/gobu.png 993w`"
              sizes="90vw"
            />
            <CldImg
              src="bagushaus/about/gobu.png"
              placeholder
              width="150,300"
              sizes="150px"
              alt="Gobu's picture"
            />
          </picture>
        </div>
      </div>
      <p class="detail">{{ $t('about.gobuDetail') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: "f_auto,q_auto,w_"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/about-davigobu.scss";

$gobuRed: #ddc1b9;

.profile {
  left: 7%;

  &::before {
    right: 0;
    border-bottom: 2.5rem solid $gobuRed;
    border-left: 7rem solid $gobuRed;
    border-top: 2.5rem solid transparent;
    border-right: 7rem solid transparent;
  }
}
.contents {
  background-color: $gobuRed;

  @include respond("tab") {
    background-color: transparent;
  }
}
.top {
  margin: 6% 2% 1% 1%;
  flex-direction: row-reverse;
  @include respond("tab") {
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
  }

  & .img-box {
    &::after {
      content: "";
      transform: rotate(27deg);
      @include respond("tab") {
        content: none;
      }
    }
  }
}
.caption {
  padding-right: 2%;
  order: 1;
  &::after {
    left: -4%;
  }
  @include respond("tab") {
    background-color: #d34c24;
  }
}
</style>
