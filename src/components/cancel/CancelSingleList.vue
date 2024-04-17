<script setup>
import { ref } from 'vue'
import CancelButton from './CancelButton.vue'
const emit = defineEmits(['nextStep'])

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
  result.value = null
  emit('nextStep', result)
}
</script>

<template>
  <div>
    <div class="variants-list">
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
      <CancelButton :text="buttonText" :disabled="listData === null" @click="nextStep" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.variant-item {
  background: #0b1233;
  box-shadow: none;
  border: 1px solid transparent;

  &.is-active {
    border-color: #39cdcb;
  }
}

.variant-item__text {
  color: #b6b4be;
  font-size: 1.4rem;
  font-weight: 400;
}
</style>
