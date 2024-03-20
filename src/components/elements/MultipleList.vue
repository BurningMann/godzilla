<script setup>
import Button from '../../components/elements/Button.vue'
import { ref } from 'vue'

defineProps({
  list: {
    type: String,
    default: '',
  },
})

const listData = ref([])
</script>

<template>
  <div>
    <div class="variants-list__message">Multiple choice supported</div>
    <div class="variants-list">
      <label
        v-for="item in list"
        :key="item.value"
        class="variant-item"
        :class="{ 'is-active': listData.includes(item.value) }"
      >
        <input v-model="listData" type="checkbox" :value="item.value" />
        <div v-if="item.icon" class="variant-item__icon">{{ item.icon }}</div>
        <div class="variant-item__text">{{ item.label }}</div>
        <div class="variant-item__point"></div>
      </label>
    </div>
    <div class="footer-box">
      <Button :text="'Next'" :disabled="!listData.length" @click="$emit('nextStep', listData)" />
    </div>
  </div>
</template>
