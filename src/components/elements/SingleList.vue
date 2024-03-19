<script setup>
import { ref } from 'vue'

defineProps({
  list: {
    type: String,
    default: '',
  },
})

const listData = ref('')
</script>

<template>
  <div>
    <div class="variants-list">
      <div
        v-for="item in list"
        :key="item.value"
        class="variant-item"
        :class="{ 'is-active': listData === item.value }"
        @click="
          () => {
            listData = item.value
            $emit('nextStep', item.value)
          }
        "
      >
        <div class="variant-item__text">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>
