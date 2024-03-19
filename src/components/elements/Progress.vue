<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const { stepInfoData } = storeToRefs(store)

const percent = computed(() => {
  const sectionPercent = 100 / stepInfoData.value.sectionsCount
  return (
    sectionPercent * (stepInfoData.value.currentSection - 1) +
    (sectionPercent / stepInfoData.value.stepCount) * stepInfoData.value.currentStep
  )
})
</script>

<template>
  <div class="progress">
    <div class="progress__line-container">
      <div
        class="progress__line"
        :style="{
          width: `${percent}%`,
        }"
      ></div>
    </div>
    <div class="progress__point is-active"></div>
    <div
      v-for="step in stepInfoData.sectionsCount === 1 ? 0 : stepInfoData.sectionsCount"
      :key="step"
      class="progress__point"
      :class="{ 'is-active': stepInfoData.currentSection - 1 >= step }"
    >
      <svg
        v-if="stepInfoData.currentSection - 1 >= step"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.62842 5.72566C3.45385 5.90132 3.21712 6 2.97029 6C2.72346 6 2.48673 5.90132 2.31216 5.72566L0.272789 3.6727C0.186373 3.5857 0.117827 3.48242 0.0710639 3.36875C0.0243006 3.25508 0.000236001 3.13325 0.000244143 3.01021C0.000252285 2.88718 0.024333 2.76536 0.0711113 2.65169C0.11789 2.53803 0.18645 2.43475 0.272877 2.34776C0.359304 2.26077 0.461905 2.19177 0.574823 2.14469C0.687741 2.09762 0.808764 2.07339 0.930982 2.0734C1.0532 2.07341 1.17422 2.09765 1.28713 2.14474C1.40004 2.19183 1.50263 2.26085 1.58905 2.34785L2.80412 3.57083C2.84829 3.61508 2.90807 3.63992 2.97038 3.63992C3.03269 3.63992 3.09247 3.61508 3.13664 3.57083L6.42668 0.258873C6.60259 0.0900419 6.83712 -0.00284227 7.08015 6.63049e-05C7.32317 0.00297488 7.55544 0.101445 7.72731 0.274439C7.89918 0.447433 7.99703 0.68123 7.99995 0.925878C8.00287 1.17053 7.91064 1.40662 7.74295 1.58373L3.62842 5.72566Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &__line-container {
    width: 100%;
    background: #eae1e5;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }

  &__line {
    width: 100%;
    height: 0.6rem;
    background: linear-gradient(90deg, #642b72 0%, #c5426e 100%);
    border-radius: 30px;
    transition: 0.3s ease-in-out;
  }

  &__point {
    width: 1.6rem;
    height: 1.6rem;
    background: #eae1e5;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &.is-active {
      background: #c4426e;
    }
  }
}
</style>
