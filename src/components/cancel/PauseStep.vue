<script setup>
import { ref } from 'vue'
import CancelButton from './CancelButton.vue'
import CancelStepTop from './CancelStepTop.vue'
import CancelLoadingCircle from './CancelLoadingCircle.vue'

const curentStep = ref(1)
</script>

<template>
  <div>
    <div v-if="curentStep === 1">
      <CancelStepTop :localTitle="'Take a break and come back <br> when you’re ready'" />
      <div class="pausing-info-list">
        <div class="pausing-info-list__title">Pausing your membership will allow you to:</div>
        <div class="pausing-info-list__row">
          <div class="pausing-info-list__icon">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_868_3026)">
                <circle cx="11" cy="12.5" r="9.73343" stroke="#80FEF1" stroke-width="1.53314" />
                <path
                  d="M11.6699 12.92C11.548 12.92 11.4492 12.8213 11.4492 12.6994L11.4492 7.82031C11.4492 7.4061 11.1134 7.07031 10.6992 7.07031C10.285 7.07031 9.94922 7.4061 9.94922 7.82031V13.4203C9.94922 13.9726 10.397 14.4203 10.9493 14.4203L14.4502 14.4201C14.8644 14.4201 15.2002 14.0843 15.2002 13.6701C15.2002 13.2558 14.8644 12.92 14.4502 12.92L11.6699 12.92Z"
                  fill="#80FEF1"
                />
              </g>
              <defs>
                <clipPath id="clip0_868_3026">
                  <rect width="21" height="23" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pausing-info-list__text">Use the remaining [number] days of your membership later</div>
        </div>
        <div class="pausing-info-list__row">
          <div class="pausing-info-list__icon">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_868_3035)">
                <rect x="2.2" y="6.2" width="17.6" height="12.6" rx="1.3" stroke="#80FEF1" stroke-width="1.4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6312 9.21675C17.8605 9.48734 17.842 9.90613 17.5897 10.1521L12.382 15.2296L8.43304 12.4061L5.26295 15.806C5.02184 16.0646 4.63093 16.0646 4.38982 15.806C4.14871 15.5474 4.14871 15.1282 4.38982 14.8696L8.2757 10.702L12.2647 13.5541L16.759 9.17221C17.0113 8.92621 17.4018 8.94615 17.6312 9.21675Z"
                  fill="#80FEF1"
                />
              </g>
              <defs>
                <clipPath id="clip0_868_3035">
                  <rect width="21" height="23" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pausing-info-list__text">Save your existing data until you’re ready to come back</div>
        </div>
        <div class="pausing-info-list__row">
          <div class="pausing-info-list__icon">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_868_3041)">
                <rect x="2.2" y="6.2" width="17.6" height="12.6" rx="1.3" stroke="#80FEF1" stroke-width="1.4" />
                <line x1="2.5" y1="10.5" x2="19.5" y2="10.5" stroke="#80FEF1" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_868_3041">
                  <rect width="21" height="23" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pausing-info-list__text">Pause billing and your astrological progress</div>
        </div>
      </div>
      <div class="buttons-list">
        <CancelButton :text="'Pause membership for 2 weeks'" :ghost="true" @click="curentStep++" />
        <CancelButton :text="'Pause membership for 1 month'" :transparent="true" />
      </div>
    </div>
    <CancelLoadingCircle
      v-else-if="curentStep === 2"
      :title="'Updating your subscription'"
      :subtitle="'Please don’t hit “back” or refresh the page'"
      @loadingEnd="curentStep++"
    />
    <div v-else-if="curentStep === 3">
      <CancelStepTop :localTitle="'Your subscription has been paused'" />
      <div class="pausing-final-text">
        <p>We understand that <strong>change</strong> is hard, and it <strong>takes time</strong>.</p>
        <br />
        <p>During this time, your Natal Chart Premium is inactive, and <strong>you won’t be charged</strong> .</p>
        <br />
        <p>
          Your subscription will be resumed in [number] days. <strong>All remaining days are saved</strong> to give
          Natal Chart a shot!
        </p>
      </div>
      <div class="buttons-list">
        <CancelButton :text="'Done'" :ghost="true" @click="curentStep++" />
        <CancelButton :text="'Any questions? Contact support'" :transparent="true" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pausing-info-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
  }

  &__row {
    display: flex;
    gap: 1.4rem;
  }

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    font-size: 1.5rem;
    line-height: 147%;
    color: rgba(255, 255, 255, 0.8);
  }
}

.pausing-final-text {
  margin-bottom: 5.2rem;
  color: #d9d9d9;
}
</style>
