<script setup>
import Button from '../../components/elements/Button.vue'

import { useMainStore } from '../../stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { currentStep, currentStepData, signList, appData } = storeToRefs(store)
</script>

<template>
  <div class="result-page">
    <div class="result-page__image">
      <img :src="`./images/${currentStepData?.resultImage}`" class="fit-cover" />
    </div>
    <div class="result-page__content">
      <div class="result-page__title" v-html="currentStepData?.resultTitle" />
      <div class="result-page__text">
        {{ signList[appData.sign]?.name }} individuals with the ruling {{ signList[appData.sign]?.planet }} require a
        tailored approach to building a relationship. <br />
        <br />
        By analyzing the astrological synastry between you and your partner, we will uncover insights to optimize your
        relationship and foster a fulfilling connection.
      </div>
    </div>

    <div class="footer-box"><Button :text="currentStepData?.resultButtonText" @click="currentStep++" /></div>
  </div>
</template>

<style scoped lang="scss"></style>
