<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { currentStepData } = storeToRefs(store)
</script>

<template>
  <div class="step-start-box">
    <div v-if="currentStepData?.stepPrevtext" class="step-subtext">
      {{ currentStepData.stepPrevtext }}
    </div>
    <div v-if="currentStepData?.stepTitle" class="step-title">
      {{ currentStepData.stepTitle }}
    </div>
    <div v-if="currentStepData?.stepSubtext" class="step-subtext">
      {{ currentStepData.stepSubtext }}
    </div>
  </div>
</template>
