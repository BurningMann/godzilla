<script setup>
import { ref } from 'vue'

import CancelStartStep from './CancelStartStep.vue'
import PauseStep from './PauseStep.vue'
import CancelStep from './CancelStep.vue'

const currentLine = ref('start')
</script>

<template>
  <div class="page cancel-page">
    <div class="page-inner container">
      <CancelStartStep
        v-if="currentLine === 'start'"
        @pick-line="
          (val) => {
            currentLine = val
          }
        "
      />
      <PauseStep v-if="currentLine === 'pause'" />
      <CancelStep v-if="currentLine === 'cancel'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cancel-page {
  background: #000521;

  .page-inner {
    padding: 5.7rem var(--container-padding) 3rem;
  }
}
</style>
