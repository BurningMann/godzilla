<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStepData } = storeToRefs(store)

defineProps({
  localTitle: {
    type: String,
    default: '',
  },
  localSubtext: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="step-start-box">
    <div
      v-if="currentStepData?.stepPrevtext"
      class="step-subtext"
      :class="{ 'is-large': currentStepData.textSize === 'large' }"
      v-html="currentStepData.stepPrevtext"
    />
    <div
      v-if="localTitle || currentStepData?.stepTitle"
      class="step-title"
      v-html="localTitle || currentStepData.stepTitle"
    />
    <div
      v-if="localSubtext || currentStepData?.stepSubtext"
      class="step-subtext"
      :class="{ 'is-large': currentStepData.textSize === 'large' }"
      v-html="localSubtext || currentStepData.stepSubtext"
    />
  </div>
</template>
