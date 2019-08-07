<template>
  <form class="form" method="post" @submit.prevent="validate($event)" novalidate="true">
    <p style="display: none">
      <label>
        {{ $t('formDummy') }}
        <input name="dummyInput" value="contact" v-model="dummyInput" />
      </label>
    </p>
    <h1 class="form__caption">Contact</h1>
    <div class="form__box">
      <transition name="slide-in">
        <p v-show="!isValid.name" class="error-message">{{ $t('nameError') }}</p>
      </transition>
      <transition name="slide-in">
        <label v-if="form.name" for="name" class="form__label">{{ $t('yourName') }}</label>
      </transition>
      <input
        type="text"
        id="name"
        class="form__field"
        :class="{ inValid: !isValid.name }"
        name="name"
        :placeholder="$t('yourName')"
        v-model="form.name"
      />
    </div>
    <div class="form__box">
      <transition name="slide-in">
        <p v-show="!isValid.email" class="error-message">{{ $t('emailError') }}</p>
      </transition>
      <transition name="slide-in">
        <label v-if="form.email" for="email" class="form__label">{{ $t('yourContact') }}</label>
      </transition>
      <input
        type="email"
        id="email"
        class="form__field"
        :class="{ inValid: !isValid.name }"
        name="email"
        :placeholder="$t('yourContact')"
        v-model="form.email"
      />
    </div>
    <div class="form__box">
      <transition name="slide-in">
        <p v-show="!isValid.title" class="error-message">{{ $t('titleError') }}</p>
      </transition>
      <transition name="slide-in">
        <label v-if="form.title" for="title" class="form__label">{{ $t('formTitle') }}</label>
      </transition>
      <input
        type="text"
        id="title"
        class="form__field"
        :class="{ inValid: !isValid.name }"
        name="title"
        :placeholder="$t('formTitle')"
        v-model="form.title"
      />
    </div>
    <div class="form__box">
      <transition name="slide-in">
        <p v-show="!isValid.message" class="error-message">{{ $t('messageError') }}</p>
      </transition>
      <transition name="slide-in">
        <label v-if="form.message" for="message" class="form__label">{{ $t('formMessage') }}</label>
      </transition>
      <textarea
        name="message"
        id="message"
        class="form__field form__field--textarea"
        :class="{ inValid: !isValid.name }"
        :placeholder="$t('formMessage')"
        v-model="form.message"
      ></textarea>
    </div>
    <button class="form__button" type="submit">Send</button>
    <transition name="pop">
      <Thanks v-if="thanks" />
    </transition>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 78%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include respond("mobile") {
    justify-content: center;
    margin-top: 3rem;
    height: auto;
  }

  &__caption {
    font-size: 5.2rem;
    text-transform: uppercase;
    @include respond("mobile") {
      font-size: 6rem;
    }
  }

  &__box {
    width: 100%;
    position: relative;
    margin-top: 4rem;
    @include respond("mobile") {
      margin-top: 5rem;
    }
  }

  &__field {
    width: 100%;
    height: 7rem;
    font-size: 2.7rem;
    padding: 1.2rem 2rem;
    box-sizing: border-box;
    border: none;

    @include respond("mobile") {
      height: 8rem;
    }

    &::placeholder {
      color: $gray-d;
      font-family: $font-p;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0.5rem 0 $black-l;
    }

    &--textarea {
      width: 100%;
      height: 38rem;
      padding: 2rem 2rem;
      resize: none;
    }
  }

  &__label {
    @include tsh-m;
    display: block;
    width: 12rem;
    color: $white-p;
    top: -3.2rem;
    left: 1rem;
    position: absolute;
    font-size: 2rem;
    font-family: inherit;
  }

  &__button {
    display: inline-block;
    font-size: 5rem;
    margin: 6rem 0 0;
    margin-top: 6rem;
    color: $white-p;
    border: 3px solid $white-p;
    background-color: transparent;
    padding: 0.2rem 4rem;
    padding-bottom: 0.2rem;
    text-transform: uppercase;
    font-family: $font-h;
    box-shadow: 2px 2px 3px rgba($black-d, 0.3);
  }
}

.error-message {
  font-size: 1.8rem;
  padding-left: 1rem;
  color: $red-err;
  position: absolute;
  top: -3rem;
  right: 0;
  text-align: right;
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
  transition: opacity 0.9s ease-in;
}
.pop-leave-active {
  transition: opacity 1.4s ease-out;
}
</style>


<script>
export default {
  layout: "mobileContact",
  name: "mobileContact",
  components: {
    Thanks: () => import("~/components/Contact/Thanks.vue")
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
      thanks: false
    };
  },
  watch: {
    thanks() {
      setTimeout(() => {
        this.thanks = false;
      }, 1900);
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
      (this.form.message.length > 10 && this.form.message.length < 300)
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
          setTimeout(() => this.$router.go(-1), 2800);
        })
        .catch(err => {
          this.$router.push("404");
        });
    }
  }
};
</script>

