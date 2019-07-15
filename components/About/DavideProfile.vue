<template>
  <section class="profile">
    <div class="contents">
      <div class="top">
        <div class="img-box">
          <img src="~/assets/img/2x/about/about-davi.png" alt="Davide's picture" />
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

<style lang="scss" scoped>
$daviGreen: #b9ddc8;
.profile {
  position: absolute;
  top: 6%;
  right: 1%;
  width: 67%;
  height: 78%;
  z-index: 200;
  pointer-events: none;
  display: flex;
  justify-content: flex-end;

  &::before {
    content: "";
    position: absolute;
    top: 4%;
    left: 0;
    border-bottom: 2.5rem solid $daviGreen;
    border-right: 7rem solid $daviGreen;
    border-top: 2.5rem solid transparent;
    border-left: 7rem solid transparent;
  }
}
.contents {
  background-color: $daviGreen;
  width: 81%;
  height: 100%;
  border-radius: 1.8rem;
  overflow: hidden;
  position: relative;
}
.top {
  height: 35%;
  margin: 10% 1% 8% 2%;
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
      transform: rotate(-27deg);
      z-index: -1;
    }
  }
}
.caption {
  margin-top: 8%;
  padding-left: 2%;
  position: relative;
  & .title {
    font-size: 1.8rem;
    letter-spacing: 0.05px;
    font-weight: normal;
  }
  & .name {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }
  & .skills {
    padding-top: 2.1rem;
    font-size: 1.4rem;
    letter-spacing: 0px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 60.5%;
    right: -4%;
    width: 120%;
    height: 0;
    border-bottom: 3px solid $white-p;
  }
}
.detail {
  font-size: 1.5rem;
  margin: 0 8% 10% 8%;
  line-height: 1.6;
}
</style>

