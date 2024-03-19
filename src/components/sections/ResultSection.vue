<script setup>
import Button from '../../components/elements/Button.vue'

import { useMainStore } from '../../stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { currentStep, currentStepData } = storeToRefs(store)
</script>

<template>
  <div class="result-page">
    <div class="result-page__image">
      <img :src="`./${currentStepData?.resultImage}`" class="fit-cover" />
    </div>
    <div class="result-page__content">
      <div class="result-page__title" v-html="currentStepData?.resultTitle" />
      <div class="result-page__text" v-html="currentStepData?.resultContent" />
    </div>

    <div class="footer-box"><Button :text="currentStepData?.resultButtonText" @click="currentStep++" /></div>
  </div>
</template>

<style scoped lang="scss"></style>
