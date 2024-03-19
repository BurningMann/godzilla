<script setup>
import Button from '../../components/elements/Button.vue'
import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, appData } = storeToRefs(store)
const relationship = ref('')

const setData = () => {
  currentStep.value++
  appData.value.relationship = relationship.value.value
  appData.value.aimList = relationship.value.aimList
}

const variants = ref({
  male: [
    {
      icon: '👱‍♂️',
      label: 'Single',
      value: 'single',
      aimList: 1,
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
      aimList: 2,
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
      aimList: 2,
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
      aimList: 2,
    },
    {
      icon: '🔱',
      label: 'Looking',
      value: 'looking',
      aimList: 1,
    },
    {
      icon: '👩‍🦰️',
      label: 'Other',
      value: 'other',
      aimList: 2,
    },
  ],
  female: [
    {
      icon: '👩‍🦰️',
      label: 'Single',
      value: 'single',
      aimList: 1,
    },
    {
      icon: '💍',
      label: 'Married',
      value: 'married',
      aimList: 2,
    },
    {
      icon: '💖',
      label: 'In a relationship',
      value: 'relationship',
      aimList: 2,
    },
    {
      icon: '💔',
      label: 'Complicated',
      value: 'complicated',
      aimList: 2,
    },
    {
      icon: '🔱',
      label: 'Looking for a soul mate',
      value: 'looking',
      aimList: 1,
    },
    {
      icon: '👱‍♂️',
      label: 'Other',
      value: 'other',
      aimList: 2,
    },
  ],
})
</script>

<template>
  <div class="quiz-page">
    <div>
      <div class="step-title">What is your relationship status?</div>
      <div class="variants-list">
        <label
          v-for="item in variants[appData.gender]"
          :key="item.value"
          class="variant-item"
          :class="{ 'is-active': relationship.value === item.value }"
        >
          <input v-model="relationship" type="radio" :value="item" />
          <div class="variant-item__icon">{{ item.icon }}</div>
          <div class="variant-item__text">{{ item.label }}</div>
        </label>
      </div>
    </div>

    <div class="footer-box"><Button :text="'Continue'" :disabled="!relationship" @click="setData" /></div>
  </div>
</template>
