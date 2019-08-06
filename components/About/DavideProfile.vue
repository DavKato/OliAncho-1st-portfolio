<template>
  <section class="profile">
    <div class="contents">
      <div class="top">
        <div class="img-box">
          <picture class="img-box-img">
            <source
              :media="`(max-width: ${$data.$tab}px)`"
              :srcset="`https://res.cloudinary.com/oliancho/image/upload/${options}331/bagushaus/Mobile/davi.png 331w, https://res.cloudinary.com/oliancho/image/upload/${options}662/bagushaus/Mobile/davi.png 662w, https://res.cloudinary.com/oliancho/image/upload/${options}993/bagushaus/Mobile/davi.png 993w`"
              sizes="90vw"
            />
            <CldImg
              src="bagushaus/about/davi.png"
              placeholder
              width="150,300"
              sizes="150px"
              alt="Davide's picture"
            />
          </picture>
        </div>
        <div class="caption">
          <h3 class="title">
            {{ $t('about.daviPosition') }}
            <span class="name">Davide</span>
          </h3>
          <p class="skills">{{ $t('about.daviSkill') }}</p>
        </div>
      </div>
      <p class="detail">{{ $t('about.daviDetail') }}</p>
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

$daviGreen: #b9ddc8;

.profile {
  right: 7%;
  justify-content: flex-end;

  @include respond("tab") {
    justify-content: flex-start;
  }

  &::before {
    left: 0;
    border-bottom: 2.5rem solid $daviGreen;
    border-right: 7rem solid $daviGreen;
    border-top: 2.5rem solid transparent;
    border-left: 7rem solid transparent;
  }
}
.contents {
  background-color: $daviGreen;

  @include respond("tab") {
    background-color: transparent;
  }
}
.top {
  margin: 6% 1% 5% 2%;
  @include respond("tab") {
    margin: 0;
  }

  & .img-box {
    &::after {
      content: "";
      transform: rotate(-27deg);
      @include respond("tab") {
        content: none;
      }
    }
  }
}
.caption {
  padding-left: 2%;
  @include respond("tab") {
    background-color: #2a6a45;
  }
}
</style>

