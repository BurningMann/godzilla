<script setup>
import CancelButton from './CancelButton.vue'

const emit = defineEmits(['pickLine'])
</script>

<template>
  <div>
    <div class="offer-img">
      <img src="/images/special-offer-1.png" alt="" />
    </div>
    <div class="title">
      Special Offer <br />
      <span>$1 for 4 weeks</span>
    </div>
    <div class="box">
      <div class="box__title">
        Keep your Premium Membership <br />
        <span>for just $1!</span>
      </div>
      <div class="box__text">
        Yes, you read that right. Our best offer yet! <br />
        We’d hate for you to lose access to NatalChart’s guidance. Changes are wealth − today, it’s just
        <strong>$1</strong> .
      </div>
    </div>
    <div class="buttons-list">
      <CancelButton :text="'Keep Premium'" :ghost="true" @click="emit('pickLine', 'keep')" />
      <CancelButton :text="'Cancel Premium'" :transparent="true" @click="emit('pickLine', 'cancel')" />
    </div>
    <div class="footer-text">
      You may cancel at any time before Apr 9, 2023, and you will not be charged for renewal. If you don’t cancel,
      NatalChart will automatically continue your membership at the end of your plan and charge membership fee
      (currently $39.99). No refunds or credits for partially used subscriptions. You can cancel your subscription
      anytime on your Subscription Management page.
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
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 5rem;

  span {
    color: #fb7c7b;
  }
}

.box {
  padding: var(--container-padding) var(--container-padding);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4.2rem;

  &__title {
    font-size: 1.5rem;
    font-weight: 700;

    span {
      color: #fb7c7b;
    }
  }

  &__text {
    font-size: 1.5rem;
    color: #b6b4be;
  }
}
</style>
