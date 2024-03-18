<script setup>
import Progress from '../../components/elements/Progress.vue'
import Button from '../../components/elements/Button.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStep, data } = storeToRefs(store)

const stepData = ref('')

const setData = () => {
  currentStep.value++
  data.value.aim = stepData.value
}

const variants = ref({
  1: [
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
  2: [
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
</script>

<template>
  <div class="quiz-page">
    <Progress :step-count="2" :current-step="1" />
    <div>
      <div class="step-title">What is your aim right now?</div>
      <div class="variants-list">
        <label
          v-for="item in variants[data.aimList]"
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
