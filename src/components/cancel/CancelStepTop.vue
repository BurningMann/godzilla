<script setup>
defineProps({
  localTitle: {
    type: String,
    default: '',
  },
  localSubtext: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="step-start-box">
    <div v-if="localTitle" class="step-title is-white" v-html="localTitle" />
    <div v-if="localSubtext" class="step-subtext is-white" v-html="localSubtext" />
  </div>
</template>

<style scoped lang="scss">
.step-title {
  font-size: 2.4rem;
}
</style>
