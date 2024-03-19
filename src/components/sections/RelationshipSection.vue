<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import Button from '../../components/elements/Button.vue'
import StepTop from '../../components/elements/StepTop.vue'
import BackArrow from '../../components/elements/BackArrow.vue'

import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)

const relationship = ref('')

const setData = () => {
  appData.value.relationship = relationship.value
  currentStep.value++
}

const variants = ref({
  male: [
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
  female: [
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
})
</script>

<template>
  <div class="quiz-page">
    <div>
      <BackArrow @click="currentStep--" />
      <StepTop :local-title="'What is your relationship status?'" />
      <div class="variants-list">
        <label
          v-for="item in variants[appData.gender]"
          :key="item.value"
          class="variant-item"
          :class="{ 'is-active': relationship === item.value }"
        >
          <input v-model="relationship" type="radio" :value="item.value" />
          <div class="variant-item__icon">{{ item.icon }}</div>
          <div class="variant-item__text">{{ item.label }}</div>
        </label>
      </div>
    </div>

    <div class="footer-box"><Button :text="'Continue'" :disabled="!relationship" @click="setData" /></div>
  </div>
</template>
