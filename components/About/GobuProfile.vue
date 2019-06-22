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
          <img src="~/assets/img/2x/about/about-gobu.png" alt="Gobu's picture">
        </div>
      </div>
      <p class="detail">{{ $t('about.gobuDetail') }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$gobuRed: #ddc1b9;
.profile {
  position: absolute;
  top: 6%;
  left: 1%;
  width: 67%;
  height: 78%;
  z-index: 200;
  pointer-events: none;
  &::before {
    content: "";
    position: absolute;
    top: 4%;
    right: 0;
    border-bottom: 2.5rem solid $gobuRed;
    border-left: 7rem solid $gobuRed;
    border-top: 2.5rem solid transparent;
    border-right: 7rem solid transparent;
  }
}
.contents {
  background-color: $gobuRed;
  width: 81%;
  height: 100%;
  border-radius: 1.8rem;
  overflow: hidden;
  position: relative;
}
.top {
  height: 35%;
  margin: 10% 2% 8% 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & .img-box {
    height: 100%;
    position: relative;
    z-index: 300;

    & > img {
      height: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $white-p;
      transform: rotate(27deg);
      z-index: -1;
    }
  }
}
.caption {
  margin-top: 8%;
  padding-right: 2%;
  position: relative;
  & .title {
    font-size: 1.8rem;
    letter-spacing: 0.05px;
  }
  & .name {
    margin-left: 1rem;
    font-size: 3rem;
  }
  & .skills {
    padding-top: 2.1rem;
    font-size: 1.4rem;
    letter-spacing: 0px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 62.5%;
    left: -4%;
    width: 120%;
    height: 0;
    border-bottom: 3px solid $white-p;
  }
}
.detail {
  font-size: 1.4rem;
  margin: 0 6% 10% 6%;
  letter-spacing: 0.1px;
}
</style>
