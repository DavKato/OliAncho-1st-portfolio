<template>
  <form
    class="form"
    method="post"
    @submit.prevent="validate($event)"
    novalidate="true"
    netlify
    netlify-honeypot="bot-field"
  >
    <p class="hidden">
      <label>
        {{ $t('formDummy') }}
        <input name="dummyInput" value="contact" v-model="dummyInput">
      </label>
    </p>
    <div class="form__box form__box1"></div>
    <div class="form__box form__box-str form__box2">
      <h1 class="form__caption">Contact</h1>
    </div>
    <div class="form__box form__box3">
      <h2 class="form__subtext">{{ $t('formSub') }}</h2>
    </div>
    <div
      class="form__box form__box-str form__box4 form__box-input"
      :class="{ inValid: !isValid.name, lighten: form.name }"
    >
      <p v-show="!isValid.name" class="error-message">{{ $t('nameError') }}</p>
      <transition name="slide-in">
        <label v-if="form.name" for="name" class="form__label">{{ $t('yourName') }}</label>
      </transition>
      <input
        type="text"
        id="name"
        class="form__field"
        name="name"
        :placeholder="$t('yourName')"
        v-model="form.name"
      >
    </div>
    <div
      class="form__box form__box5 form__box-input"
      :class="{inValid: !isValid.email, lighten: form.email}"
    >
      <p v-show="!isValid.email" class="error-message">{{ $t('emailError') }}</p>
      <transition name="slide-in">
        <label v-if="form.email" for="email" class="form__label">{{ $t('yourContact') }}</label>
      </transition>
      <input
        type="email"
        id="email"
        class="form__field"
        name="email"
        :placeholder="$t('yourContact')"
        v-model="form.email"
      >
    </div>
    <div
      class="form__box form__box-str form__box6 form__box-input"
      :class="{inValid: !isValid.title, lighten: form.title }"
    >
      <p v-show="!isValid.title" class="error-message">{{ $t('titleError') }}</p>
      <transition name="slide-in">
        <label v-if="form.title" for="title" class="form__label">{{ $t('formTitle') }}</label>
      </transition>
      <input
        type="text"
        id="title"
        class="form__field"
        name="title"
        :placeholder="$t('formTitle')"
        v-model="form.title"
      >
    </div>
    <div
      class="form__box form__box7 form__box-input"
      :class="{inValid: !isValid.message, lighten: form.message }"
    >
      <p v-show="!isValid.message" class="error-message">{{ $t('messageError') }}</p>
      <transition name="slide-in">
        <label v-if="form.message" for="message" class="form__label">{{ $t('formMessage') }}</label>
      </transition>
      <textarea
        name="message"
        id="message"
        class="form__field"
        :placeholder="$t('formMessage')"
        v-model="form.message"
      ></textarea>
    </div>
    <div class="form__box form__box-str form__box8">
      <button class="form__button" type="submit">Send</button>
    </div>
    <TwitterLink/>
    <FlowerBox/>
    <transition name="pop">
      <Thanks v-if="thanks"/>
    </transition>
  </form>
</template>

<style lang="scss" scoped>
.form {
  padding-left: 4%;
  margin: 12vh 4.5vw;
  width: 100%;
  max-width: 150vh;
  height: 93vh;
  position: relative;

  &__caption {
    font-size: 3.5rem;
    padding-left: 1.5rem;
    text-transform: uppercase;
  }

  &__subtext {
    font-size: 2rem;
    font-weight: 500;
    color: $black-p;
    padding-left: 1.5rem;
  }

  &__field {
    font-size: 2rem;
    font-family: inherit;
    color: $black-p;
    background-color: inherit;
    border: none;
    width: 100%;
    height: 100%;
    padding: 1.2rem 2rem;

    &::placeholder {
      color: $gray-l;
      font-family: $font-p;
    }

    &:hover {
      &::placeholder {
        @include tsh-m;
      }
    }

    &:focus {
      outline: none;
    }
  }

  &__button {
    font-size: 3.5rem;
    font-family: inherit;
    color: $white-p;
    text-transform: uppercase;
    background-color: inherit;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    outline: none;
  }

  &__label {
    @include tsh-m;
    display: block;
    width: 12rem;
    color: $gray-l;
    top: 0;
    left: -12.5rem;
    position: absolute;
    font-size: 1.5rem;
    font-family: inherit;
    text-align: right;
  }
  ////////////////////////////////////////////////////////
  //BOX AREA
  ////////////////////////////////////////////////////////
  //box variables and mixins
  $bw0: 92.5%;
  $bw1: 46.7%;
  $bw2: $bw1 + 0.1%;
  $bw3: 50.5%;
  $bw4: $bw3 + 0.1%;
  $bw5: 54.1%;
  $bw6: $bw5 + 0.1%;
  $bw7: 70.1%;
  $bw8: $bw7 + 0.1%;

  $bh1: 7%;
  $bh2: 8.1%;
  $bh3: 8.2%;
  $bh4: 8.4%;
  $bh5: 8.7%;
  $bh6: 9.1%;
  $bh7: 39%;
  $bh8: 11.5%;

  //Default settings of box$::after
  @mixin oblique($bdw) {
    //bdw = border-width
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    box-sizing: content-box;
    border-bottom: 0.5rem solid transparent;
    background-image: linear-gradient(
      to top right,
      transparent 48.99%,
      $white-p 49%,
      $white-p 48.99% + $bdw,
      $green-p 49% + $bdw
    );
    background-repeat: no-repeat;
  }

  //Calculate the width of box$::after
  @mixin calcSql($a, $b) {
    $c1: $a / 1%;
    $c2: $b / 1%;
    $denom: 100 / $c2;
    width: (($c2 - $c1) * $denom) * 1%;
  }
  ///////////////////////////////////////////////////////////////

  &__box {
    border-bottom: 0.5rem solid $white-p;
    position: relative;
    transition: all 0.2s;

    &-input:focus-within {
      border-bottom: 0.5rem solid $black-l;
      box-shadow: inset 0 0.5rem 0 rgba(0, 0, 0, 0.1);
    }

    &-str {
      border-right: 0.5rem solid $white-p;
    }
  }

  &__box1 {
    height: $bh1;
    width: $bw1;

    &::before {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: 0;
      border-top: 0.5rem solid $white-p;
      width: $bw0;
      height: 100%;
    }

    &::after {
      @include oblique(8);
      $co1: $bw0 / 1%;
      $co2: $bw1 / 1%;
      $denomN: 100 / $co2;
      width: (($co2 - ($co2 * $co1 / 100)) * $denomN) * 1%;
    }
  }

  &__box2 {
    height: $bh2;
    width: $bw2;
    display: flex;
    align-items: center;
  }
  &__box3 {
    height: $bh3;
    width: $bw3;
    display: flex;
    align-items: center;

    &::after {
      @include oblique(7);
      @include calcSql($bw2, $bw3);
    }
  }
  &__box4 {
    height: $bh4;
    width: $bw4;
  }
  &__box5 {
    height: $bh5;
    width: $bw5;

    &::after {
      @include oblique(7);
      @include calcSql($bw4, $bw5);
    }
  }
  &__box6 {
    height: $bh6;
    width: $bw6;
  }
  &__box7 {
    height: $bh7;
    width: $bw7;

    &::after {
      @include oblique(1.5);
      @include calcSql($bw6, $bw7);
    }
  }
  &__box8 {
    height: $bh8;
    width: $bw8;

    &:hover,
    &:focus {
      @include lg-m($green-p);
      box-shadow: 0.8rem 0.7rem 0.8rem rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0.1rem) scaleY(1.02);
      box-shadow: 0.2rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
    }
  }
}

///////////////////////////////////////////////////////////////////

#message {
  resize: none;
  width: 80%;
}

.lighten {
  // background-color: lighten($green-p, 3%);
  @include lg-m($green-p);
}

.hidden {
  display: none;
}

.error-message {
  font-size: 1rem;
  padding-left: 1rem;
  color: $red-err;
  position: absolute;
  top: 0;
  left: 0;
}
.inValid {
  border-left: 0.3rem outset $red-err;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-10rem);
  opacity: 0;
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s;
  transition-timing-function: ease-out;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
}
.pop-enter-active {
  transition: opacity 1.4s ease-in;
}
.pop-leave-active {
  transition: opacity 1.8s ease-out;
}
</style>


<script>
import TwitterLink from "./TwitterLink";
import FlowerBox from "./FlowerBox";
import Thanks from "./Thanks";
export default {
  components: {
    TwitterLink,
    FlowerBox,
    Thanks
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        title: null,
        message: null
      },
      isValid: {
        name: true,
        email: true,
        title: true,
        message: true
      },
      dummyInput: null,
      focused: false,
      thanks: false
    };
  },
  watch: {
    thanks() {
      setTimeout(() => {
        this.thanks = false;
      }, 2400);
    }
  },
  methods: {
    validate(e) {
      this.form.name ? (this.isValid.name = true) : (this.isValid.name = false);

      this.form.email && this.validEmail(this.form.email)
        ? (this.isValid.email = true)
        : (this.isValid.email = false);

      this.form.title
        ? (this.isValid.title = true)
        : (this.isValid.title = false);

      this.form.message &&
      (this.form.message.length > 20 && this.form.message.length < 300)
        ? (this.isValid.message = true)
        : (this.isValid.message = false);

      //if error doesn't exist => submit
      if (this.formValidation() && !this.dummyInput) {
        this.handleSubmit();
      } else {
        e.preventDefault();
      }
    },
    validEmail(email) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(email);
    },
    formValidation() {
      for (const key in this.isValid) {
        if (this.isValid[key] === false) {
          return false;
        }
      }
      return true;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    formInit() {
      this.form.name = null;
      this.form.email = null;
      this.form.title = null;
      this.form.message = null;
    },
    handleSubmit() {
      this.$axios
        .$post("https://hook.integromat.com/jgk4rmx12sjkhcoxarsusb525fpjugkf", {
          "Content-Type": "application/json",
          ...this.form
        })
        .then(() => {
          this.formInit();
          this.thanks = true;
        })
        .catch(err => {
          this.$router.push("404");
        });
    }
  }
};
</script>
