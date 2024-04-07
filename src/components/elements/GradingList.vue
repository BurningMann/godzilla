<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../stores/main'
const store = useMainStore()
const { currentStepData } = storeToRefs(store)

const emit = defineEmits(['nextStep'])

defineProps({
  list: {
    type: Array,
    default: '',
  },
})

const listData = ref('')

function setData(item) {
  setTimeout(() => {
    emit('nextStep', item)
  }, 800)
}
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
            setData()
          }
        "
      >
        <div class="variant-item__text">{{ item }}</div>
      </div>
    </div>
    <div class="variants-list__grade-text">
      <div>{{ currentStepData.gradePrefix || 'Not at all' }}</div>
      <div>{{ currentStepData.gradePostfix || 'Absolutely' }}</div>
    </div>
  </div>
</template>
