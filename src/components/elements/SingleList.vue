<script setup>
import { ref } from 'vue'
import Button from '../../components/elements/Button.vue'

defineProps({
  list: {
    type: String,
    default: '',
  },
})

const listData = ref(null)
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
      <Button :text="'Next'" :disabled="listData === null" @click="$emit('nextStep', listData)" />
    </div>
  </div>
</template>
