<script setup>
import { ref } from 'vue'

import LoadingPoints from '../elements/LoadingPoints.vue'

import { useMainStore } from '../../stores/main'
import { storeToRefs } from 'pinia'
const store = useMainStore()
const { currentStep } = storeToRefs(store)

const progress = ref(0)
const start = 410

setTimeout(() => {
  let interval = setInterval(() => {
    progress.value++

    if (progress.value === 100) {
      clearInterval(interval)
      setTimeout(() => {
        currentStep.value++
      }, 300)
    }
  }, 30)
}, 500)
</script>

<template>
  <div class="progress-page">
    <div class="progress">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="140px" height="140px">
        <circle
          cx="70"
          cy="70"
          r="65"
          stroke-linecap="round"
          :style="{ 'stroke-dashoffset': start - start * (progress / 100) }"
        />
      </svg>
      <div class="progress__inner">{{ progress }}%</div>
    </div>
    <div class="progress-text">Loading report</div>
    <LoadingPoints color="#000" />
  </div>
</template>

<style scoped lang="scss">
.progress-page {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.progress {
  width: 14rem;
  height: 14rem;
  background: #ebe4eb;
  border-radius: 50%;
  position: relative;
  margin: 0 auto 3rem;

  &__inner {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    border-radius: 50%;
    background: var(--c-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.6rem;
    color: var(--c-black);
    font-weight: 600;
    text-align: center;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  circle {
    fill: none;
    stroke: #c3426f;
    stroke-width: 1rem;
    stroke-dasharray: 410;
    width: 100%;
    height: 100%;
  }
}

.progress-text {
  color: var(--c-black);
  text-align: center;
  font-size: 1.6rem;
}
</style>
