<script setup>
import Button from '../../components/elements/Button.vue'
</script>

<template>
  <div class="result-page">
    <div class="result-page__image">
      <img src="../../assets/step-1-result.jpg" class="fit-cover" />
    </div>
    <div class="result-page__content">
      <div class="result-page__title">Great! You just set your first goal!</div>
      <div class="result-page__text">Let’s keep going so we can get to know you better</div>
    </div>

    <div class="footer-box"><Button :text="'Let’s Start!'" /></div>
  </div>
</template>

<style scoped lang="scss">
.result-page {
  &__image {
    position: relative;
    margin-bottom: 2.5rem;

    &::before {
      content: '';
      display: block;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 85%, #1f0732 100%);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }

  &__content {
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1.4rem;
  }

  &__text {
    font-size: 1.4rem;
  }
}
</style>
