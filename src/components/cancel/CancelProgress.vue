<script setup>
import { computed } from 'vue'

const props = defineProps({
  sectionsCount: {
    type: Number,
    default: 1,
  },
  currentSection: {
    type: Number,
    default: 1,
  },
  currentStep: {
    type: Number,
    default: 1,
  },
  stepCount: {
    type: Number,
    default: 1,
  },
})

const percent = computed(() => {
  const sectionPercent = 100 / props.sectionsCount
  return sectionPercent * (props.currentSection - 1) + (sectionPercent / props.stepCount) * props.currentStep
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
      v-for="step in sectionsCount === 1 ? 0 : sectionsCount"
      :key="step"
      class="progress__point"
      :class="{
        'is-active': currentSection - 1 >= step || (currentSection === step && currentStep >= stepCount),
      }"
    >
      <svg
        v-if="currentSection - 1 >= step || (currentSection === step && currentStep >= stepCount)"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.00043" cy="9.00043" r="9.00043" fill="#80FEF1" />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress {
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &__line-container {
    width: 100%;
    background: #131a3e;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    overflow: hidden;
  }

  &__line {
    width: 100%;
    height: 0.6rem;
    background: #80fef1;
    border-radius: 30px;
    transition: 0.3s ease-in-out;
  }

  &__point {
    width: 1.6rem;
    height: 1.6rem;
    background: #131a3e;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &.is-active {
      background: #80fef1;
    }
  }
}
</style>
