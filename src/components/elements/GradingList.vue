<script setup>
import { ref } from 'vue'
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
      <div>Not at all</div>
      <div>Absolutely</div>
    </div>
  </div>
</template>
