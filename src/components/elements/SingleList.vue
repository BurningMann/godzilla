<script setup>
import { ref } from 'vue'
import Button from '../../components/elements/Button.vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'

const emit = defineEmits(['nextStep'])

const store = useMainStore()
const { currentStep, fullScreenPage } = storeToRefs(store)

const props = defineProps({
  list: {
    type: Array,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Next',
  },
})

const listData = ref(null)
const result = ref(null)

const nextStep = () => {
  const data = props.list.find((el) => el.value === listData.value)
  if (!result.value && data?.result) {
    result.value = data.result
    fullScreenPage.value = data.result.fullScreenPage
  } else {
    result.value = null
    emit('nextStep', listData.value)
    if (data?.result?.final) {
      setTimeout(() => {
        currentStep.value++
      }, 0)
    }
  }
}
</script>

<template>
  <div>
    <div v-if="result">
      <div class="result-page">
        <div class="result-page__image">
          <img :src="`./${result?.resultImage}`" class="fit-cover" />
        </div>
        <div class="result-page__content">
          <div class="result-page__title" v-html="result?.resultTitle" />
          <div class="result-page__text" v-html="result?.resultContent" />
        </div>
      </div>
    </div>
    <div v-else class="variants-list">
      <label
        v-for="item in list"
        :key="item.value"
        class="variant-item"
        :class="{ 'is-active': listData === item.value }"
      >
        <input v-model="listData" type="radio" :value="item.value" />
        <div v-if="item.icon" class="variant-item__icon">{{ item.icon }}</div>
        <div class="variant-item__text">{{ item.label }}</div>
      </label>
    </div>

    <div class="footer-box">
      <Button :text="result?.resultButtonText || buttonText" :disabled="listData === null" @click="nextStep" />
    </div>
  </div>
</template>
