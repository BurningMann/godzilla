<script setup>
import { ref } from 'vue'
import CancelButton from './CancelButton.vue'
import CancelStepTop from './CancelStepTop.vue'
const emit = defineEmits(['pickLine'])

const showAllert = ref(false)
</script>

<template>
  <div>
    <CancelStepTop :localTitle="'Manage Natal Chart Premium'" />

    <div class="subscribtion-box-container">
      <div class="subscribtion-email">roma.diakoff@gmail.com</div>
      <div class="subscribtion-box">
        <div class="subscribtion-title">Your SUBSCRIPTION PLAN</div>
        <div class="subscribtion-info">
          <div class="subscribtion-info-row">
            <div class="subscribtion-info-label">Status</div>
            <div class="subscribtion-info-value">Active</div>
          </div>
          <div class="subscribtion-info-row">
            <div class="subscribtion-info-label">Renewal date</div>
            <div class="subscribtion-info-value">December 20th, 2024</div>
          </div>
        </div>
        <div class="subscribtion-brake-text">
          Need a break? Life can get busy — we understand. Pause your subscription and come back when you’re ready.
        </div>
        <CancelButton :text="'Pause subscription'" @click="emit('pickLine', 'pause')" />
      </div>
      <div class="subscribtion-box">
        <div class="subscribtion-cancel-text">
          Cancelling your subscription will impact your journey and result in the loss of access to Natal Chart Premium
          features.
        </div>
        <CancelButton :text="'Turn off auto-renewal'" :secondStyle="true" @click="showAllert = true" />
      </div>
      <CancelButton :text="'Back'" :ghost="true" />
    </div>

    <div class="cancel-allert-bg" :class="{ 'is-active': showAllert }">
      <div class="cancel-allert">
        <div class="cancel-allert__close" @click="showAllert = false">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 18L18 11M11 11L18 18" stroke="white" stroke-linecap="round" />
          </svg>
        </div>
        <div class="cancel-allert__title">Before you go…</div>
        <div class="cancel-allert__text">
          Your Natal Chart Premium is paid until [Date]. If you continue with cancellation, your account will be
          deactivated on that date. To save your progress, pause your subscription instead, and return whenever you’re
          ready.
        </div>
        <div class="cancel-allert__buttons">
          <CancelButton :text="'Pause subscription'" @click="emit('pickLine', 'pause')" />
          <CancelButton :text="'Cancel subscription'" :transparent="true" @click="emit('pickLine', 'cancel')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscribtion-box-container {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.subscribtion-email {
  font-size: 1.5rem;
  color: #b6b4be;
}

.subscribtion-box {
  padding: var(--container-padding) var(--container-padding);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.subscribtion-title {
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
}

.subscribtion-info-row {
  display: flex;
  justify-content: space-between;
}

.subscribtion-info-label {
  color: #fff;
  font-size: 1.6rem;
}

.subscribtion-info-value {
  color: #b6b4be;
  font-size: 1.6rem;
}

.subscribtion-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.subscribtion-brake-text {
  color: #b6b4be;
  line-height: 147%;
  font-size: 1.5rem;
}

.subscribtion-cancel-text {
  font-size: 1.3rem;
  line-height: 169%;
  color: #b6b4be;
}
</style>
