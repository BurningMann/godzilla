<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import Button from '../../components/elements/Button.vue'
import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData, stepInfoData } = storeToRefs(store)

const stepData = ref('')

const setData = () => {
  appData.value.aim = stepData.value
  currentStep.value++
  stepInfoData.currentStep++
}

const variants = ref({
  single: [
    {
      icon: '💘',
      label: 'Find my perfect partner',
      value: 'find_my_perfect_partner',
    },
    {
      icon: '💍',
      label: 'Get married',
      value: 'get_married',
    },
    {
      icon: '😇',
      label: 'Understand myself better',
      value: 'understand_myself_better',
    },
    {
      icon: '🎉',
      label: 'Become happier',
      value: 'become_happier',
    },
    {
      icon: '🏅',
      label: 'Foster personal growth',
      value: 'foster_personal_growth',
    },
    {
      icon: '🫶',
      label: 'Check love compatibility',
      value: 'check_love_compatibility',
    },
    {
      icon: '⬆️',
      label: 'All the above',
      value: 'all_the_above',
    },
  ],
  partner: [
    {
      icon: '🥰',
      label: 'Improve current relationship',
      value: 'improve_current_relationship',
    },
    {
      icon: '❤️‍🩹',
      label: 'Solve relationship problems',
      value: 'solve_relationship_problems',
    },
    {
      icon: '💍',
      label: 'Build a strong marriage',
      value: 'build_a_strong_marriage',
    },
    {
      icon: '🫶',
      label: 'Check compatibility',
      value: 'check_compatibility',
    },
    {
      icon: '⬆️',
      label: 'All the above',
      value: 'all_the_above',
    },
  ],
})

const currentStepList = computed(() => {
  if (
    appData.value.relationship &&
    ['relationship', 'married', 'complicated', 'other'].includes(appData.value.relationship)
  ) {
    return variants.value.partner
  }
  return variants.value.single
})
</script>

<template>
  <div class="quiz-page">
    <BackArrow v-if="!fullScreenPage" @click="currentStep--" />
    <div>
      <StepTop :local-title="`What is your <span class='purple-text-1'>aim right now?</span>`" />
      <div class="variants-list">
        <label
          v-for="item in currentStepList"
          :key="item.value"
          class="variant-item"
          :class="{ 'is-active': stepData === item.value }"
        >
          <input v-model="stepData" type="radio" :value="item.value" />
          <div class="variant-item__icon">{{ item.icon }}</div>
          <div class="variant-item__text">{{ item.label }}</div>
        </label>
      </div>
    </div>

    <div class="footer-box"><Button :text="'Continue'" :disabled="!stepData" @click="setData" /></div>
  </div>
</template>
