<script setup>
import { storeToRefs } from 'pinia'

import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'
import SingleList from '../../components/elements/SingleList.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

const setData = (data) => {
  appData.value.relationship = data

  if (['relationship', 'married', 'complicated', 'other'].includes(data)) {
    appData.value.relationshipType = 'partner'
  } else {
    appData.value.relationshipType = 'single'
  }

  currentStep.value++
}

const sectionStepData = {
  Male: [
    {
      icon: '👱‍♂️',
      label: 'Single',
      value: 'single',
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
    },
    {
      icon: '🔱',
      label: 'Looking',
      value: 'looking',
    },
    {
      icon: '👩‍🦰️',
      label: 'Other',
      value: 'other',
    },
  ],
  Female: [
    {
      icon: '👩‍🦰️',
      label: 'Single',
      value: 'single',
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
    },
    {
      icon: '🔱',
      label: 'Looking for a soul mate',
      value: 'looking',
    },
    {
      icon: '👱‍♂️',
      label: 'Other',
      value: 'other',
    },
  ],
}
</script>

<template>
  <div class="quiz-page">
    <div>
      <BackArrow @click="currentStep--" />
      <StepTop :local-title="'What is your relationship status?'" />
      <SingleList
        :list="sectionStepData[appData.gender]"
        :button-text="'Continue'"
        @next-step="
          (data) => {
            setData(data)
          }
        "
      />
    </div>
  </div>
</template>
