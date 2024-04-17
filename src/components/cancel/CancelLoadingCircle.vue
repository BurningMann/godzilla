<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['loadingEnd'])

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})

onMounted(() => {
  setTimeout(() => {
    emit('loadingEnd')
  }, 3000)
})
</script>

<template>
  <div class="loading-box">
    <div class="loading">
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 3.10769C8.55541 1.92101 10.9165 1.37047 13.2848 1.52569C15.6531 1.68092 17.9222 2.53494 19.8051 3.97976C21.6881 5.42458 23.1003 7.39531 23.8632 9.64273C24.6261 11.8901 24.7054 14.3133 24.0911 16.6058C23.4768 18.8983 22.1965 20.9572 20.4121 22.5221C18.6278 24.087 16.4194 25.0876 14.0663 25.3973C11.7132 25.7071 9.32115 25.3122 7.19253 24.2625C5.06392 23.2128 3.29438 21.5554 2.10769 19.5"
          stroke="#80FEF1"
          stroke-width="3"
        />
      </svg>
    </div>
    <div v-if="title" class="loading-box__title" v-html="title" />
    <div v-if="subtitle" class="loading-box__subtitle" v-html="subtitle" />
  </div>
</template>

<style scoped lang="scss">
.loading-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding-top: 10lvh;

  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 129%;
    text-align: center;
  }

  &__subtitle {
    font-size: 1.5rem;
    color: #b6b4be;
    line-height: 133%;
    text-align: center;
  }
}

.loading {
  width: 2rem;
  height: 2rem;
  animation: round 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
