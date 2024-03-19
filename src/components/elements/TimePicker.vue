<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['timeSelect'])

const hours = ref(12)
const minutes = ref(0)
const dayTime = ref('am')

const setData = () => {
  emit('timeSelect', { hours: hours.value, minutes: minutes.value, daytime: dayTime.value })
}

onMounted(() => {
  setData()
})
</script>

<template>
  <div class="time-select-box">
    <el-select v-model="hours" placeholder="Select" size="large" @change="setData">
      <el-option v-for="item in 12" :key="item" :label="item" :value="item" />
    </el-select>
    <el-select v-model="minutes" placeholder="Select" size="large" @change="setData">
      <el-option v-for="item in 60" :key="item" :label="item" :value="item" />
    </el-select>
    <el-select v-model="dayTime" placeholder="Select" size="large" @change="setData">
      <el-option :label="'AM'" :value="'am'" />
      <el-option :label="'PM'" :value="'pm'" />
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.time-select-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
