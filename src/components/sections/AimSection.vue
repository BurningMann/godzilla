<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import SingleList from '../../components/elements/SingleList.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData, stepInfoData, fullScreenPage } = storeToRefs(store)

const setData = (slug, data) => {
  appData.value[slug] = data
  currentStep.value++
  stepInfoData.currentStep++
}

const sectionStepData = {
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
}
</script>

<template>
  <div class="quiz-page">
    <BackArrow v-if="!fullScreenPage" @click="currentStep--" />
    <div>
      <StepTop :local-title="`What is your <span class='purple-text-1'>aim right now?</span>`" />
      <SingleList
        :list="sectionStepData[appData.relationshipType]"
        @next-step="
          (data) => {
            setData('aim', data)
          }
        "
      />
    </div>
  </div>
</template>
