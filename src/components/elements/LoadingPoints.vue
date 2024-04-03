<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})
</script>

<template>
  <div class="loading">
    <div class="loading__point" :style="{ color: color }">.</div>
    <div class="loading__point" :style="{ color: color }">.</div>
    <div class="loading__point" :style="{ color: color }">.</div>
  </div>
</template>

color: rgba(0, 0, 0, 1);

<style scoped lang="scss">
.loading {
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  &__point {
    opacity: 0.5;
  }

  @for $i from 1 through 3 {
    .loading__point:nth-child(#{$i}) {
      animation: flash 1s #{0.5 * $i}s linear infinite;
    }
  }
}

@keyframes flash {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
