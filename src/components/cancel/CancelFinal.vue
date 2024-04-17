<script setup>
import CancelButton from './CancelButton.vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div v-if="type === 'keep'">
    <div class="title">Great news!</div>
    <div class="box-text">
      We’re glad that you’ve decided to stay with us and we’ll work hard to make sure you’re happy with your decision.
    </div>
    <div class="buttons-list">
      <CancelButton :text="'Got It'" :ghost="true" />
      <CancelButton :text="'Any questions? Contact support'" :transparent="true" />
    </div>
  </div>
  <div v-if="type === 'cancel'">
    <div class="title">Sorry to see you go!</div>
    <div class="box-text">
      <p class="is-white">We've canceled your subscription − you won't be charged any further</p>
      <br />
      <p>You'll still be able to use NatalChart until your subscription ends on 06/12/2023</p>
    </div>
    <div class="buttons-list">
      <CancelButton :text="'Got It'" :ghost="true" />
      <CancelButton :text="'Any questions? Contact support'" :transparent="true" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-text {
  font-size: 1.1rem;
  line-height: 136%;
  text-align: center;
  color: #b6b4be;
  padding-top: 2rem;
}
.offer-img {
  width: 10rem;
  margin: 0 auto 2.8rem;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2.1rem;
  margin-bottom: 2.2rem;
}

.box-text {
  font-size: 1.5rem;
  color: #b6b4be;
  margin-bottom: 6.2rem;

  .is-white {
    color: #fff;
  }
}
</style>
