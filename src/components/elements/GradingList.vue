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
    <div class="variants-list is-horizontal">
      <div
        v-for="item in 5"
        :key="item"
        class="variant-item is-number"
        :class="{ 'is-active': listData === item }"
        @click="
          () => {
            listData = item
            $emit('nextStep', item)
          }
        "
      >
        <div class="variant-item__text">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
