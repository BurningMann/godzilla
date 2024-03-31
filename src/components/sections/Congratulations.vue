<script setup>
import Button from '../elements/Button.vue'

import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

onMounted(() => {})
</script>

<template>
  <div class="congrats-page">
    <div class="congrats-page__top">
      <img src="/images/congrats-top.png" />
      <a href="#" class="sign-btn"> Already registered? <strong>Sign in →</strong> </a>
    </div>
    <div>
      <div class="congrats-page__title">Congratulations!</div>
      <div class="congrats-page__subtitle">Your trial has started. Full access granted.</div>
      <div class="congrats-page__access-msg">
        To access full functionality, install the app <br />
        and sign in with your email address
      </div>

      <div class="congrats-page__email-title">Sign in with email</div>
      <div>
        <input type="text" readonly :value="appData.email" class="input congrats-page__email" />
      </div>

      <div class="congrats-page__separator"></div>

      <div class="congrats-page__email-title">Tap to download</div>

      <Button :text="'Download now'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.congrats-page {
  background: #fff8ff;
  padding: 0 var(--container-padding) 3rem;
  min-height: 100svh;
  color: var(--c-black);

  &__top {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;

    img {
      width: 29rem;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
    font-weight: 700;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__access-msg {
    border-radius: 15px;
    text-align: center;
    background: #eaf7eb;
    padding: 1.6rem 0 1.9rem;
    font-size: 1.5rem;
    line-height: 150%;
    margin-bottom: 3rem;
  }

  &__email-title {
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 150%;
  }

  &__email {
    text-align: center;
  }

  &__separator {
    margin: 2rem 0;
    opacity: 0.5;
    border: 1px solid rgba(119, 51, 149, 0.4);
    border-radius: 10px;
    width: 100%;
    height: 1px;
  }
}

.sign-btn {
  width: 27rem;
  height: 5rem;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.53);
  background: #fff;
  color: var(--c-black);
  text-align: center;
  padding: 1.6rem 1rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
