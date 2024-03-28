<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

const setData = (value) => {
  currentStep.value++
  appData.value.gender = value
}
</script>

<template>
  <div class="index-landing">
    <h1>Understand Yourself and Improve Relationships with Astrology</h1>
    <div class="step-title purple-text-1">1-Minute Personal Assessment</div>
    <div class="gender-section">
      <div class="gender-section__title">Select your gender:</div>
      <div class="gender-container">
        <div class="gender-card" @click="setData('male')">
          <div class="gender-card__image">
            <img src="/images/male-1.png" />
          </div>
          <div class="gender-card__button is-blue">
            Male
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.75221 6.49725L2.88894 11.3607C2.75503 11.4943 2.68137 11.6729 2.68137 11.8634C2.68137 12.054 2.75503 12.2325 2.88894 12.3663L3.31509 12.7922C3.44879 12.9262 3.62751 13 3.81797 13C4.00842 13 4.18693 12.9262 4.32074 12.7922L10.1112 7.00182C10.2456 6.86759 10.3191 6.68824 10.3186 6.49757C10.3191 6.30606 10.2457 6.12691 10.1112 5.99258L4.32613 0.207789C4.19232 0.073773 4.01381 5.51182e-07 3.82325 5.67842e-07C3.6328 5.84492e-07 3.45428 0.073773 3.32037 0.207789L2.89433 0.633724C2.6171 0.910951 2.6171 1.36225 2.89433 1.63937L7.75221 6.49725Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="gender-card" @click="setData('female')">
          <div class="gender-card__image">
            <img src="/images/female-1.png" />
          </div>
          <div class="gender-card__button is-pink">
            Female
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.75221 6.49725L2.88894 11.3607C2.75503 11.4943 2.68137 11.6729 2.68137 11.8634C2.68137 12.054 2.75503 12.2325 2.88894 12.3663L3.31509 12.7922C3.44879 12.9262 3.62751 13 3.81797 13C4.00842 13 4.18693 12.9262 4.32074 12.7922L10.1112 7.00182C10.2456 6.86759 10.3191 6.68824 10.3186 6.49757C10.3191 6.30606 10.2457 6.12691 10.1112 5.99258L4.32613 0.207789C4.19232 0.073773 4.01381 5.51182e-07 3.82325 5.67842e-07C3.6328 5.84492e-07 3.45428 0.073773 3.32037 0.207789L2.89433 0.633724C2.6171 0.910951 2.6171 1.36225 2.89433 1.63937L7.75221 6.49725Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>
        By proceeding, you're accepting our <a href="#">EULA</a> and <a href="#">Privacy Notice</a>.
        <br />
        Need help? Our support team is only a <a href="#">click away</a>.
      </p>
      <br />
      <p>Please note, this NatalChart App is purely for amusement and will not predict life expectancy.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-landing {
  background: var(--c-white);
}
.gender-section {
  &__title {
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--c-black);
    text-align: center;
    margin-bottom: 2.6rem;
  }
}
.gender-container {
  display: grid;
  grid-template-columns: repeat(2, 17rem);
  justify-content: center;
  gap: 1rem;
}

.gender-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 1.5rem;
    background: #ffffff;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
    opacity: 0.3;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  &__image {
    position: relative;
    z-index: 2;
  }

  &__button {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 600;
    height: 5rem;

    flex-shrink: 0;
    border-radius: 0 0 2rem 2rem;

    svg {
      position: absolute;
      right: 1rem;
    }

    &.is-blue {
      background: linear-gradient(90deg, #2b3272 0%, #4542c5 100%);
    }

    &.is-pink {
      background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);
    }
  }
}
</style>
